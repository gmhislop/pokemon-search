import { Button, Column } from "@/components/atoms";
import { styled } from "styled-components";

export const StyledInput = styled.input`
  width: 12rem;
  padding: 1rem 2rem;
  margin: 2rem;
  border: 1px solid gray;
  border-radius: 12px;
  font-size: 1rem;
  color: black;
  background-color: white;
  transition: border-color 0.2s ease-in-out;
    
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  `;

export const InputContainer = styled(Column)`
  position: relative;
`;

export const DeleteButton = styled(Button)`
  position: absolute;
  margin: 2rem 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  &:hover {
    color: #ff0000;
 }
`;