import { Heading } from "@/components/atoms";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const NotFoundGif = styled.img`
  width: 300px;
  height: auto;
`;

export const NotFoundTitle = styled(Heading)`
  font-size: 2rem;
  color: var(--link-color);
  margin-bottom: 1rem;
`;