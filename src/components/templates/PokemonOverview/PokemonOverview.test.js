import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonOverview from '@/components/templates/PokemonOverview/index';
import { getPokemons } from '@/queries/pokemons';
import { ThemeProvider } from 'styled-components';

jest.mock('@/queries/pokemons', () => ({
  getPokemons: jest.fn(),
}));

const mockTheme = {
  colors: {
    link: '#0000ff', 
  },
};

describe('PokemonOverview', () => {
  it('renders PokemonGrid with data after successful fetching', async () => {
    // Updated mockResolvedValue to match the provided mock data structure
    getPokemons.mockResolvedValue({
      pokemon_v2_pokemonspecies: [
        {
          name: 'Bulbasaur',
          id: '1',
          pokemon_v2_pokemons: [
            {
              pokemon_v2_pokemonsprites: [
                {
                  sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                }
              ],
              pokemon_v2_pokemontypes_aggregate: {
                nodes: [
                  {
                    pokemon_v2_type: {
                      name: 'grass'
                    }
                  },
                  {
                    pokemon_v2_type: {
                      name: 'poison'
                    }
                  }
                ]
              },
              base_experience: 64
            }
          ]
        },
        {
          name: 'Charmander',
          id: '4',
          pokemon_v2_pokemons: [
            {
              pokemon_v2_pokemonsprites: [
                {
                  sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
                }
              ],
              pokemon_v2_pokemontypes_aggregate: {
                nodes: [
                  {
                    pokemon_v2_type: {
                      name: 'fire'
                    }
                  }
                ]
              },
              base_experience: 62
            }
          ]
        }
      ],
    });

    render(
      <ThemeProvider theme={mockTheme}>
        <PokemonOverview />
      </ThemeProvider>
    );

    // Assuming loader is shown until data is fetched
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    const pokemonCards = await screen.findAllByTestId('pokemon-card');
    expect(pokemonCards).toHaveLength(2);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
