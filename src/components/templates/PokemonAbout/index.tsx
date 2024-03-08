"use client";

import * as React from "react";
import Image from "next/image";
import { PokemonAboutContainer, PokemonAboutWrapper } from "./styled";
import { Button, Paragraph } from "@/components/atoms";
import Loader from '@/components/atoms/Loader';

const PokemonAbout = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <PokemonAboutContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <PokemonAboutWrapper>
          <Paragraph size={1}>
            Discover Kanto Pokémon and Their Types
            Welcome to our web application dedicated to all Pokémon enthusiasts! Dive into the vibrant world of Kanto Pokémon and explore their diverse types in this comprehensive guide.
            Explore the Kanto Region: Embark on a nostalgic journey through the iconic Kanto region, where the Pokémon adventure first began. From the lush forests of Viridian to the bustling streets of Celadon City, encounter a wide array of Pokémon species that call Kanto home.
          </Paragraph>
          <Image src={'/images/pikachu.png'} alt={'Pikachu'} width={200} height={200} />
        </PokemonAboutWrapper>
      )}
      <Button $variant="filled" href="/">Explore</Button>
    </PokemonAboutContainer>
  );
};

export default PokemonAbout;
