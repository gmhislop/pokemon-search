import { css, styled } from 'styled-components';

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.625rem 1rem;
  border: none;
  border-radius: 1.875rem;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  transition:
    background-color 0.3s,
    color 0.3s;

  ${({ $variant }) =>
    $variant === 'filled' &&
    css`
      background-color: var(--button-filled-background);
      color: var(--button-filled-text);
      border: 0.125rem solid var(--button-filled-border);
    `}

  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      background-color: transparent;
      border: 0.125rem solid var(--button-outline-border);
      color: var(--button-outline-text);
    `}

  &:hover {
    ${({ $variant }) =>
      $variant === 'filled' &&
      css`
        background-color: var(--button-hover-filled-background);
        color: var(--button-filled-text);
      `}

    ${({ $variant }) =>
      $variant === 'outline' &&
      css`
        color: var(--button-hover-outline-text);
      `}
  }
`;

type ButtonProps = {
  $variant?: 'filled' | 'outline';
};
