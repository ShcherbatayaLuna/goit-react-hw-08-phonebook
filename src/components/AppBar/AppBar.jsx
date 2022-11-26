import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function AppBar() {
  const logIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <div>
        <Link to="/">Phonebook</Link>
      </div>
      {logIn ? <UserMenu /> : <Navigation />}
    </div>
  );
}
