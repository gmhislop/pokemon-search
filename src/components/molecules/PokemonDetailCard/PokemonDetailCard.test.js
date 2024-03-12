import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { PokemonDetailCard } from '@/components/molecules/PokemonDetailCard';
import { getTypeColor } from '@/services/getColor';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

// At the top of your test file
jest.mock('@/services/getColor', () => ({
    getTypeColor: jest.fn().mockImplementation((type) => {
      // Define the mock behavior based on type
      if (type === 'grass') return 'green';
      // ... additional type checks if necessary
      return 'gray';
    }),
}));

// Theme mock, adjust to match your actual theme structure
const mockTheme = {
  colors: {
    primary: '#ff00ff',
  },
};

// Create a test suite
describe('PokemonDetailCard', () => {
  const mockPokemonData = {
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
  };
  
  const mockRelationImages = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
  ];

  it('renders the detail card with correct Pokemon data', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <PokemonDetailCard pokemonData={mockPokemonData} relationImages={mockRelationImages} />
      </ThemeProvider>
    );

    expect(screen.getByRole('img', { name: mockPokemonData.name })).toBeInTheDocument();
    expect(screen.getByText(mockPokemonData.name)).toBeInTheDocument();
  });

  // Add test case for `Button` component
  it('renders a back button with correct attributes', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <PokemonDetailCard pokemonData={mockPokemonData} relationImages={mockRelationImages} />
      </ThemeProvider>
    );
    
    const backButton = screen.getByRole('link', { name: /Back/i }); 
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute('href', '/');
  });
  
  // Add test case for relation images
  it('renders relation images when available', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <PokemonDetailCard pokemonData={mockPokemonData} relationImages={mockRelationImages} />
      </ThemeProvider>
    );
    
    mockRelationImages.forEach((src, index) => {
      expect(screen.getByRole('img', { name: `pokemon-${index}` })).toHaveAttribute('src', src);
    });
  });
  
  // Add test case for Pokemon type backgrounds
  it('renders Pokemon type backgrounds correctly', () => {
    // Assuming you have defined your mockPokemonData somewhere above with the proper structure
    render(
      <ThemeProvider theme={mockTheme}>
        <PokemonDetailCard pokemonData={mockPokemonData} relationImages={null} />
      </ThemeProvider>
    );
  
    const types = mockPokemonData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes_aggregate.nodes;
  
    types.forEach((typeNode) => {
      const typeName = typeNode.pokemon_v2_type.name;
      const typeColor = getTypeColor(typeName); // This should now refer to the mocked function
      const element = screen.getByText(typeName);
      
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle(`background-color: ${typeColor}`);
    });
  });
});
