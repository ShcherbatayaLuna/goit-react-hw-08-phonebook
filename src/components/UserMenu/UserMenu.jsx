import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { Container, Box, Title, Button, Link } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Container>
      <Title>Welcome, {user.email}</Title>
      <Box>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Log out
        </Button>
        <Button type="button">
          <Link to="/contacts">Contacts</Link>
        </Button>
      </Box>
    </Container>
  );
}
