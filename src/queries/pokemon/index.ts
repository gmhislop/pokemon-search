"use client";

import client from '@/services/graphql';
import { GET_POKEMONS } from './graphql';

export const getPokemons = async () => {
  try {
    const { data } = await client.query({
      query: GET_POKEMONS,
    });
    return data;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw new Error('Failed to fetch pokemons');
  }
};
