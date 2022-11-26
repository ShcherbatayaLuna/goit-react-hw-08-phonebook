import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Toolbar from '@mui/material/Toolbar';
import { Button, Link } from './AppBar.styled';

export default function AppBar() {
  const logIn = useSelector(selectIsLoggedIn);

  return (
    <Toolbar
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Button type="button">
        <Link to="/" size="small">
          Phonebook
        </Link>
      </Button>
      {logIn ? <UserMenu /> : <Navigation />}
    </Toolbar>
  );
}
