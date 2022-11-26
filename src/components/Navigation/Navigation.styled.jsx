import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 3px 10px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 4px;

  text-align: center;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.75;

  background-color: transparent;

  :hover,
  :focus {
    background-color: #1976d2;
    color: #ffffff;
    cursor: pointer;

    & a {
      color: #ffffff;
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;

  color: #1976d2;

  /* :hover,
  :focus {
    color: #ffffff;
  } */

  :visited {
    color: #1976d2;
  }
`;
