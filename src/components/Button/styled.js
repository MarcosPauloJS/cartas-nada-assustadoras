import styled from "styled-components";

export const Button = styled.button`
  background: ${({theme}) => theme.colors.primary};
  border-radius: 20px;
  padding: 10px 40px;
  color: ${({theme}) => theme.colors.textLight};
  border: none;
  cursor: pointer;
  transition: 0.7s;

  :hover {
    opacity: 0.9; 
    transform: scale(1.1);
    transition: 0.7s;
  }

  :disabled {
    background: #242323;
    color: rgba(255, 255, 255, 0.7);
    transform: scale(1);
    opacity: 1; 
  }
`