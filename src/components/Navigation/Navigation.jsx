import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <NavLink to="/register">
        <button type="button">Register</button>
      </NavLink>
      <NavLink to="/login">
        <button type="button">Log In</button>
      </NavLink>
    </div>
  );
}
