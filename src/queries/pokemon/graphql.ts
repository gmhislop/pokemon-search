import { gql } from '@apollo/client';

export const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: Int!) {
    pokemon_v2_pokemonspecies(
      where: { id: { _eq: $id } }
    ) {
      id
      name
      evolution_chain_id
      pokemon_v2_pokemons(limit: 1) {
        pokemon_v2_pokemonsprites {
          id
          sprites(path: "front_default")
        }
        pokemon_v2_pokemontypes_aggregate {
          nodes {
            type_id
            pokemon_v2_type {
              name
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_POKEMON_BY_NAME = gql`
  query SearchPokemonByName($name: String!) {
    pokemon_v2_pokemonspecies(
      where: { name: { _ilike: $name } }
    ) {
      id
      name
    }
  }
`;