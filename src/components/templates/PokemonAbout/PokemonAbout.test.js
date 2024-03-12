import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonAbout from '@/components/templates/PokemonAbout';
import { ThemeProvider } from 'styled-components';

const mockTheme = {
    colors: {
      link: '#0000ff', 
    },
};

// Mocking next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, width, height }) => <img src={src} alt={alt} width={width} height={height} />,
}));

describe('PokemonAbout', () => {
  it('renders an image with the correct src and alt text', () => {
    render(
        <ThemeProvider theme={mockTheme}>
            <PokemonAbout />
      </ThemeProvider>
    );

    const image = screen.getByRole('img', { name: /Pikachu/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/pikachu.png');
    expect(image).toHaveAttribute('alt', 'Pikachu');
  });

  it('renders the paragraph with the correct content', () => {
    render (
        <ThemeProvider theme={mockTheme}>
            <PokemonAbout />
      </ThemeProvider>
    );

    const paragraph = screen.getByText(/Discover Kanto Pokémon and Their Types/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
    expect(paragraph).toHaveTextContent('Welcome to our web application dedicated to all Pokémon enthusiasts!');
  });
});
