"use client";
import React, { useEffect, useState } from 'react';

import { getPokemons } from '@/queries/pokemon';
import { Heading } from '@/components/atoms';
import Image from 'next/image';
import * as i from 'types';

const Home: React.FC = () => {
  const [pokemonSpecies, setPokemonSpecies] = useState<i.PokemonSpecies[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemons();
        setPokemonSpecies(pokemonData.pokemon_v2_pokemonspecies);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonSpecies.map((species) => (
          <li key={`${species.id}-${species.name}`}>
            <Heading as='h2'>{species.name}</Heading>
            {species.pokemon_v2_pokemons.map((pokemon, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
<Image src={pokemon.pokemon_v2_pokemonsprites[0]?.sprites || ''} alt={species.name} width={100} height={100} />
                <p>Types: {pokemon.pokemon_v2_pokemontypes_aggregate.nodes.map((type) => type.pokemon_v2_type.name).join(', ')}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
