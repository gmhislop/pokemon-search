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

  ${({ $variant, theme }) =>
    $variant === 'filled' &&
    css`
      background-color: ${theme.colors.buttonBackground};
      color: ${theme.colors.buttonText};
      border: 0.125rem solid ${theme.colors.buttonBorder};
    `}

  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    css`
      background-color: transparent;
      border: 0.125rem solid ${theme.colors.buttonOutlineBorder};
      color: ${theme.colors.buttonOutlineText};
    `}

  &:hover {
    ${({ $variant, theme }) =>
    $variant === 'filled' &&
    css`
        background-color: ${theme.colors.buttonHoverBackground};
        color: ${theme.colors.buttonText};
      `}

    ${({ $variant, theme }) =>
    $variant === 'outline' &&
    css`
        color: ${theme.colors.buttonHoverOutlineText};
      `}
  }
`;

type ButtonProps = {
  $variant?: 'filled' | 'outline';
};
