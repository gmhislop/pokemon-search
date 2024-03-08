import React from 'react';
import { PokemonGridContainer } from './styled';
import * as i from 'types';
import { PokemonCard } from '@/components/molecules';

export const PokemonGrid = ({ pokemonData }: { pokemonData: i.PokemonSpecies[] }) => {
  return (
    <PokemonGridContainer>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          title={pokemon.name}
          image={pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites}
          types={pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes_aggregate.nodes.map((type) => type.pokemon_v2_type.name)}
        />
      ))}
    </PokemonGridContainer>
  );
};