import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FormControl, FormLabel, Button, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <FormLabel>Username</FormLabel>
          <Input type="text" name="name" />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>

        <Button colorScheme="blackAlpha" width="30" mt={4} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};
