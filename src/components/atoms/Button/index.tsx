import Link from 'next/link';
import React from 'react';
import { StyledButton } from './styled';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  $variant?: 'filled' | 'outline';
  href?: string;
  opensInNewTab?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  $variant,
  href,
  opensInNewTab,
}) => {
  if (href && !onClick) {
    return (
      <StyledButton
        as={Link}
        passHref
        href={href}
        target={opensInNewTab ? '_blank' : '_self'}
        rel={opensInNewTab ? 'noopener noreferrer nofollow' : undefined}
        $variant={$variant}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} $variant={$variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
