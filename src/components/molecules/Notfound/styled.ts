import { Heading } from "@/components/atoms";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const NotFoundGif = styled.img`
  width: 300px;
  height: auto;
`;

export const NotFoundTitle = styled(Heading)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.link};
  margin-bottom: 1rem;
`;