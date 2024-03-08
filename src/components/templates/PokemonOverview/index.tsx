"use client";

import * as i from 'types';
import { useEffect, useState } from 'react';
import { getPokemons } from '@/queries/pokemons';
import { PokemonOverviewContainer } from './styled';
import { Loader } from '@/components/atoms';
import { PokemonGrid } from '@/components/organisms';
import { PokemonFilter } from '@/components/molecules';
import NotFoundPage from '@/components/molecules/Notfound';

const PokemonOverview = () => {
  const [pokemonData, setPokemonData] = useState<i.PokemonSpecies[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredPokemon, setFilteredPokemon] = useState<i.PokemonSpecies[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons();
        setPokemonData(data.pokemon_v2_pokemonspecies);
        setFilteredPokemon(data.pokemon_v2_pokemonspecies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (filteredPokemon: i.PokemonSpecies[]) => {
    setFilteredPokemon(filteredPokemon);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <PokemonOverviewContainer>
      <PokemonFilter pokemonData={pokemonData} onFilter={handleFilter} />
      {filteredPokemon.length > 0 ? (
        <PokemonGrid pokemonData={filteredPokemon} />
      ) : (
        <NotFoundPage />
      )}
    </PokemonOverviewContainer>
  );
};

export default PokemonOverview;
