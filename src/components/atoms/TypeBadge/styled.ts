import styled from "styled-components";

export const TypeBadge = styled.div<TypeBadgeProps>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 2px solid var(--button-outline-border);
`;

type TypeBadgeProps = {
  color: string;
};