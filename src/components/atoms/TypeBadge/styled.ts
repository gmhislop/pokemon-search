import styled from "styled-components";

export const TypeBadge = styled.div<TypeBadgeProps>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 4px;
`;

type TypeBadgeProps = {
  color: string;
};