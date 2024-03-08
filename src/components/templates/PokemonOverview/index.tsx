"use client";

import * as i from 'types';
import { useEffect, useState } from 'react';
import PokemonGrid from '@/components/organisms/PokemonGrid';
import { getPokemons } from '@/queries/pokemons';
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
      <PokemonGrid pokemonData={pokemonData} />
    </PokemonOverviewContainer>
  );
};

export default PokemonOverview;
