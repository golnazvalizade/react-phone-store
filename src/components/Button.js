import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 1rem;
  background: transparent;
  border: 0.05rem solid #ff5666;
  border-color: ${props => (props.cart ? 'var(--mainYellow)' : '#FF5666')};
  color: ${props => (props.cart ? 'var(--mainYellow)' : '#FF5666')};
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? 'var(--mainYellow)' : '#FF5666')};
    color: #2a2a72;
  }
  &:focus {
    outline: none;
  }
`;
