import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = selectUser();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      <button>
        <NavLink to="/contacts">Contacts</NavLink>
      </button>
    </div>
  );
}
