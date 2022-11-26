import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute({ component, redirectTo = '/' }) {
  const logIn = useSelector(selectIsLoggedIn);

  return !logIn ? <Navigate to={redirectTo} /> : component;
}
