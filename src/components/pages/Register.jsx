import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {name}
        <p>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </p>
        {email}
        <p>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </p>
        <p>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
