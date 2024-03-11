import styled from "styled-components";
import Image from "next/image";
import { Column } from "@/components/atoms/Column";
import { Heading, Paragraph } from "@/components/atoms";
import Link from "next/link";

export const PokeBallImage = styled(Image)`
  position: absolute;
  display: none;
  top: 6rem;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const PokemonLink = styled(Link)`
  text-decoration: none;

  &:hover {
    ${PokeBallImage} {
      transform: scale(1.05);
      display: flex;
    }
  }
`;

export const PokemonCardContainer = styled(Column) <PokemonCardContainerProps>`
  padding: 1rem;
  align-items: center;
  border: 12px solid var(--card-border);
  border-radius: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-image: 
    linear-gradient(to bottom, ${({ $typeColor }) => `${$typeColor}90`}, ${({ $typeColor }) => $typeColor}),
    url('/images/paint-background.webp');
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  opacity: 0.8;
  min-height: 500px;
  gap: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

type PokemonCardContainerProps = {
  $typeColor: string;
};

export const PokemonCardTitle = styled(Heading)`
  text-align: center;
  color: black;
  text-transform: capitalize;
  font-weight: 600;
`;

export const PokemonExperience = styled(Paragraph)`
  font-size: 1.5rem;
  font-weight: 900;
  color: black;
`;

export const PokemonHP = styled(Paragraph)`
  font-size: 0.6rem;
  font-weight: 900;
  color: black;
`;

export const PokemonCardId = styled(Paragraph)`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 900;
  color: black;
`;

export const PokemonCardType = styled(Paragraph)`
  padding: 0.5rem 1rem;
  width: 100%;
  text-transform: capitalize;
  font-weight: bold;
  color: black;
`;

export const PokemonCardImage = styled(Image)`
  border-radius: 5px;
  border-top: 2px solid var(--card-border);
  border-right: 2px solid var(--card-border);
  border-left: 2px solid var(--card-border);
  border-bottom: 12px solid var(--card-border); 
  width: 100%;
  height: 10rem;
  object-fit: contain;
  background-color: white;
`;

export const PokemonCardInfo = styled(Column)`
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--card-border);
`;

export const DividerWrapper = styled(Column)`
  margin-top: auto;
  margin-bottom: 1rem;
`;