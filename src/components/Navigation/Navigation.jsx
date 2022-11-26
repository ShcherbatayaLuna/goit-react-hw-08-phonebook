import { Box, Button, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <Box>
      <Button type="button">
        <Link to="/register">Register</Link>
      </Button>
      <Button type="button">
        <Link to="/login">Log in</Link>
      </Button>
    </Box>
  );
}
