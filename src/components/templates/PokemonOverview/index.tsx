"use client";

import * as i from 'types';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '@/queries/pokemons/graphql';
import { PokemonOverviewContainer } from './styled';
import { PokemonGrid } from '@/components/organisms';
import { PokemonFilter } from '@/components/molecules';
import { useEffect, useState } from 'react';
import { NotFoundPage } from '@/components/molecules/Notfound';
import { Loader } from '@/components/atoms';

const PokemonOverview = () => {
  const { data, loading, error } = useQuery(GET_POKEMONS);

  const handleFilter = (filteredPokemon: i.PokemonSpecies[]) => {
    setFilteredPokemon(filteredPokemon);
  };

  const [filteredPokemon, setFilteredPokemon] = useState<i.PokemonSpecies[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredPokemon(data.pokemon_v2_pokemonspecies);
    }
  }, [data]);

  if (loading) return <Loader />;

  if (error) {
    console.error('Error fetching pokemons:', error);
    return <NotFoundPage />;
  }

  return (
    <PokemonOverviewContainer>
      <PokemonFilter pokemonData={data?.pokemon_v2_pokemonspecies} onFilter={handleFilter} />
      {filteredPokemon.length > 0 ? (
        <PokemonGrid pokemonData={filteredPokemon} />
      ) : (
        <NotFoundPage />
      )}
    </PokemonOverviewContainer>
  );
};

export default PokemonOverview;
