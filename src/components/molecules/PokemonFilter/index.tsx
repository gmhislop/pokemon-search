import * as i from 'types';
import { useState } from 'react';
import { StyledInput } from './styled';

export const PokemonFilter= ({ pokemonData, onFilter }: PokemonFilterProps ) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        const filteredPokemon = pokemonData.filter(pokemon =>
            pokemon.name.toLowerCase().includes(value.toLowerCase())
        );
        onFilter(filteredPokemon);
    };

    return (
        <StyledInput
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name..."
        />
    );
};

type PokemonFilterProps = {
    pokemonData: i.PokemonSpecies[];
    onFilter: (filteredPokemon: i.PokemonSpecies[]) => void;
}
