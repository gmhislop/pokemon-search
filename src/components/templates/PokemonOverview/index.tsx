"use client";

import * as i from 'types';
import { useEffect, useState } from 'react';
import PokemonGrid from '@/components/organisms/PokemonGrid';
import { getPokemons } from '@/queries/pokemons';
import { PokemonOverviewContainer } from './styled'; // Import Loader component
import Loader from '@/components/atoms/Loader';

const PokemonOverview = () => {
    const [pokemonData, setPokemonData] = useState<i.PokemonSpecies[]>([]);
    const [loading, setLoading] = useState(true); // State to manage loading status

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
