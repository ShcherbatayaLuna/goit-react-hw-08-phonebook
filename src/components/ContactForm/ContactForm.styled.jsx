import styled from 'styled-components';

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 2px solid #1976d2;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 85px;
  padding: 6px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  background-color: #ffffff;
  cursor: pointer;

  :hover,
  :focus {
    color: #ffffff;
    border: 1px solid #1976d2;
    background-color: #1976d2;
  }
`;
