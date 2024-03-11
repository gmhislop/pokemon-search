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

export const getEvolutionChainId = (pokemonSpeciesArray: any, selectedPokemonId: number): number | null => {
  for (const species of pokemonSpeciesArray) {
    if (species.id === selectedPokemonId) {
      return species.evolution_chain_id;
    }
  }
  console.warn('No evolution chain found for the selected Pokémon ID.');
  return null;
}

export const getSpritesArrayForEvolutionChain = (pokemonSpeciesArray: any, evolutionChainId: number, selectedPokemonId: number): string[] => {
  const spritesArray: string[] = [];
  for (const species of pokemonSpeciesArray) {
    if (species.evolution_chain_id === evolutionChainId && species.id !== selectedPokemonId) {
      const pokemons = species.pokemon_v2_pokemons;
      for (const pokemon of pokemons) {
        const spritesInfo = pokemon.pokemon_v2_pokemonsprites;
        for (const sprite of spritesInfo) {
          spritesArray.push(sprite.sprites);
        }
      }
    }
  }
  return spritesArray;
}

export const getPokemonSpritesByEvolutionChain = (pokemonSpeciesArray: any, selectedPokemonId: number): string[] => {
  const evolutionChainId = getEvolutionChainId(pokemonSpeciesArray, selectedPokemonId);
  if (evolutionChainId === null) {
    return [];
  }
  return getSpritesArrayForEvolutionChain(pokemonSpeciesArray, evolutionChainId, selectedPokemonId);
}
