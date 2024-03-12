import * as i from 'types';
import React from 'react';
import { Button } from '@/components/atoms';
import { InputContainer, StyledInput } from './styled';

export const PokemonFilter = ({ pokemonData, onFilter }: PokemonFilterProps) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        setSearchTerm(value);
        const filteredPokemon = pokemonData.filter(pokemon =>
        (pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
            pokemon.id.toString() === value)
        );
        onFilter(filteredPokemon);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        onFilter(pokemonData);
    };

    return (
        <InputContainer $isFullWidth $alignItems='center' $gap={16}>
            <StyledInput
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by name or ID..."
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
