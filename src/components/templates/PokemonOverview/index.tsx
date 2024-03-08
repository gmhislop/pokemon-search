"use client";

import * as i from 'types';
import { useEffect, useState } from 'react';
import { getPokemons } from '@/queries/pokemons';
import { PokemonOverviewContainer } from './styled';
import { Loader } from '@/components/atoms';
import { PokemonGrid } from '@/components/organisms';

const PokemonOverview = () => {
    const [pokemonData, setPokemonData] = useState<i.PokemonSpecies[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getPokemons();
          setPokemonData(data.pokemon_v2_pokemonspecies);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching pokemons:', error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    if (loading) {
      return <Loader />;
    }

    return (
      <PokemonOverviewContainer>
        <PokemonGrid pokemonData={pokemonData} />
      </PokemonOverviewContainer>
    );
};

export default PokemonOverview;
