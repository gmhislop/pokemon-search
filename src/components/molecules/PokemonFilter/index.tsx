"use client";
import { Button } from '@/components/atoms';
import { useState } from 'react';
import * as i from 'types';
import { InputContainer, StyledInput } from './styled';

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
                <Button $variant='filled' onClick={handleClearSearch}>Clear</Button>
            )}
        </InputContainer>
    );
};

type PokemonFilterProps = {
    pokemonData: i.PokemonSpecies[];
    onFilter: (filteredPokemon: i.PokemonSpecies[]) => void;
};
