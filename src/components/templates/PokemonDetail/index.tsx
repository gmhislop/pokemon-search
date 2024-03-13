"use client";

import React from 'react';
import { useQuery } from '@apollo/client';
import { Loader } from '@/components/atoms';
import { PokemonDetailCard } from '@/components/molecules';
import { GET_POKEMON_BY_ID, SEARCH_POKEMON_BY_NAME } from '@/queries/pokemon/graphql';
import { GET_POKEMONS } from '@/queries/pokemons/graphql';
import { notFound, useParams } from 'next/navigation';
import { PokemonDetailContainer } from './styled';
import { getPokemonSpritesByEvolutionChain } from '@/queries/pokemon';

const PokemonDetailPage = () => {
  const params = useParams();
  const { id, name } = params;

  // Define the queries based on the params
  const { data: pokemonData, loading: loadingPokemon, error: errorPokemon } = useQuery(
    id ? GET_POKEMON_BY_ID : SEARCH_POKEMON_BY_NAME,
    { variables: { id: parseInt(id as string), name: name }, skip: !id && !name }
  );

  // Skip the query if there is no id
  const { data: pokemonSpeciesData, loading: loadingPokemons, error: errorPokemons } = useQuery(GET_POKEMONS, {
    skip: !id,
  });

  if (loadingPokemon || loadingPokemons) {
    return <Loader />;
  }

  if (errorPokemon || errorPokemons) {
    console.error('Error fetching:', errorPokemon || errorPokemons);
    return notFound();
  }

  // Get the relation images based on the evolution chain of the pokemon
  let relationImages = null;
  if (pokemonSpeciesData && pokemonSpeciesData.pokemon_v2_pokemonspecies) {
    relationImages = getPokemonSpritesByEvolutionChain(
      pokemonSpeciesData.pokemon_v2_pokemonspecies,
      parseInt(id as string)
    );
  }

  if (!loadingPokemon && !pokemonData) {
    return notFound();
  }

  return (
    <PokemonDetailContainer>
      <PokemonDetailCard pokemonData={pokemonData?.pokemon_v2_pokemonspecies[0]} relationImages={relationImages} />
    </PokemonDetailContainer>
  );
};

export default PokemonDetailPage;
