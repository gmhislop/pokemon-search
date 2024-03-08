import styled from "styled-components";
import Image from "next/image";
import { Column } from "@/components/atoms/Column";
import { Heading, Paragraph } from "@/components/atoms";
import Link from "next/link";

export const PokemonLink = styled(Link)`
  text-decoration: none;
`;

export const PokemonCardContainer = styled(Column)`
  padding: 1rem;
  align-items: center;
  border: 6px solid #f9e363;
  border-radius: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: gray;
  min-height: 400px;
  gap: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonCardTitle = styled(Heading)`
  text-align: center;
  color: white;
`;

export const PokemonCardId = styled(Paragraph)`
  width: 100%;
  text-transform: capitalize;
`;

export const PokemonCardType = styled(Paragraph)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #f9e363;
  width: 100%;
  text-transform: capitalize;
  font-weight: bold;
`;

export const PokemonCardImage = styled(Image)`
  border-radius: 5px;
  border: 2px solid black;
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
