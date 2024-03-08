// PokemonList.tsx

import React from 'react';
import * as i from 'types';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '@/queries/pokemon/graphql';


export const PokemonList = () => {
  const { data, loading, error } = useQuery<i.Pokemon>(GET_POKEMONS, {
    variables: { limit: 20, offset: 0 },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  console.log(data);

  return (
    <ul>
      {/* {data.pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Image src={pokemon.image} alt={pokemon.name} />
          {pokemon.name}
        </li>
      ))} */}
    </ul>
  );
};
