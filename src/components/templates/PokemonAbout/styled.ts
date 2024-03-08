import { Column } from "@/components/atoms/Column";
import { media } from "@/styles/utils";
import styled from "styled-components";

export const PokemonAboutContainer = styled(Column)`
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  margin-top: 3rem;
`

export const PokemonAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  padding: 3rem;
  border-radius: 12px;
  border: 0.063rem solid var(--link-color);
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  max-width: 50rem;
  min-height: 31.25rem;
  margin-top: 6.25rem;

  ${media.tablet`
    flex-direction: row;
    gap: 1.25rem;
  `}
`
