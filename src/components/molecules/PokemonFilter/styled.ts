import { styled } from "styled-components";

export const StyledInput = styled.input`
    width: 10rem;
    padding: 0.5rem;
    margin: 2rem;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 1rem;
    color: black;
    background-color: white;
    transition: border-color 0.2s ease-in-out;
    
    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }
    `;