"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import PokemonGrid from '@/components/organisms/PokemonGrid';
import { getPokemons } from '@/queries/pokemon';
import * as i from 'types';
import { PokemonOverviewContainer } from './styled';

const PokemonOverview = () => {
    const [pokemonData, setPokemonData] = useState<i.PokemonSpecies[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getPokemons();
          setPokemonData(data.pokemon_v2_pokemonspecies);
        } catch (error) {
          console.error('Error fetching pokemons:', error);
        }
      };
      fetchData();
    }, []);

  return (
    <PokemonOverviewContainer>
      <Image src={'/images/logo.png'} alt="Pokemon" width={300} height={100} />
      <PokemonGrid pokemonData={pokemonData} />
    </PokemonOverviewContainer>
  );
};

export default PokemonOverview;
