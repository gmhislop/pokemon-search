import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type PokemonType = {
  type_id: number;
  pokemon_v2_type: {
    name: string;
  };
};

export type Pokemon = {
  pokemon_v2_pokemonsprites: {
    id: number;
    sprites: string | StaticImport
  }[];
  pokemon_v2_pokemontypes_aggregate: {
    nodes: PokemonType[];
  };
  base_experience: number;
};

export type PokemonSpecies = {
  id: number;
  name: string;
  evolution_chain_id: number;
  pokemon_v2_pokemons: Pokemon[];
};

export type PokemonSpeciesData = {
  pokemon_v2_pokemonspecies: PokemonSpecies[];
};
