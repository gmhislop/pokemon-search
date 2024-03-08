"use client";
import * as i from 'types';
import { useState } from 'react';
import { DeleteButton, InputContainer, StyledInput } from './styled';

export const PokemonFilter = ({ pokemonData, onFilter }: PokemonFilterProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        const filteredPokemon = pokemonData.filter(pokemon =>
            pokemon.name.toLowerCase().includes(value.toLowerCase())
        );
        onFilter(filteredPokemon);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        onFilter(pokemonData);
    };

    return (
        <InputContainer $isFullWidth $alignItems='center' $justifyContent='center'>
            <StyledInput
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by name..."
            />
            {searchTerm && (
                <DeleteButton onClick={handleClearSearch}>Clear</DeleteButton>
            )}
        </InputContainer>
    );
};

type PokemonFilterProps = {
    pokemonData: i.PokemonSpecies[];
    onFilter: (filteredPokemon: i.PokemonSpecies[]) => void;
};
