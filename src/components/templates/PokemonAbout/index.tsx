"use client";

import { Button, Paragraph } from "@/components/atoms";
import Image from "next/image";
import { PokemonAboutContainer, PokemonAboutWrapper } from "./styled";

const PokemonAbout = () => {
  return (
    <PokemonAboutContainer>
      <PokemonAboutWrapper>
        <Paragraph size={1}>
          Discover Kanto Pokémon and Their Types
          Welcome to our web application dedicated to all Pokémon enthusiasts! Dive into the vibrant world of Kanto Pokémon and explore their diverse types in this comprehensive guide.
          Explore the Kanto Region: Embark on a nostalgic journey through the iconic Kanto region, where the Pokémon adventure first began. From the lush forests of Viridian to the bustling streets of Celadon City, encounter a wide array of Pokémon species that call Kanto home.
        </Paragraph>
        <Image src={'/images/pikachu.png'} alt={'Pikachu'} width={200} height={200} />
      </PokemonAboutWrapper>
      <Button $variant="filled" href="/">Explore</Button>
    </PokemonAboutContainer>
  );
};

export default PokemonAbout;
