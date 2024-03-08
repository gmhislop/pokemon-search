import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
 query GetPokemons {
  pokemon_v2_pokemonspecies(
    where: {
      pokemon_v2_pokemondexnumbers: {
        pokemon_v2_pokedex: { name: { _eq: "kanto" } }
      }
    }
  ) {
    id
    name
    evolution_chain_id
    pokemon_v2_pokemons (limit: 1) {
      pokemon_v2_pokemonsprites {
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
    evolves_from_species_id
  }
}
`;