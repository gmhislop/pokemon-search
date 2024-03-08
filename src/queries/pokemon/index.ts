import client from '@/services/graphql';
import { GET_POKEMON_BY_ID } from './graphql';
import * as i from 'types';

export const getPokemonById = async (id: number): Promise<i.PokemonSpecies | null> => {
  try {
    const { data } = await client.query({
      query: GET_POKEMON_BY_ID,
      variables: { id },
    });
    return data?.pokemon_v2_pokemonspecies[0] || null;
  } catch (error) {
    console.error('Error fetching Pokemon by ID:', error);
    return null;
  }
};

export const searchPokemonByName = async (name: string | string[]): Promise<i.PokemonSpecies | null> => {
  try {
    const { data } = await client.query({
      query: GET_POKEMON_BY_ID,
      variables: { name },
    });
    return data?.pokemon_v2_pokemonspecies[0] || null;
  } catch (error) {
    console.error('Error fetching Pokemon by name:', error);
    return null;
  }
};