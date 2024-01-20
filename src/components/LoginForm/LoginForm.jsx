import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { FormControl, FormLabel, Button, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="bodyContainer">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>

        <Button colorScheme="blackAlpha" width="30" mt={4} type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
