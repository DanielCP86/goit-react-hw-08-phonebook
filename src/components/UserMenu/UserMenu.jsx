import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button colorScheme="blackAlpha" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
