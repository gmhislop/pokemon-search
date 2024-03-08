"use client"

import { useEffect, useState } from 'react';
import { getPokemonById } from '@/queries/pokemon';
import { PokemonSpecies } from 'types';
import { notFound, useParams } from 'next/navigation';
import { PokemonDetailContainer } from './styled';
import { Loader } from '@/components/atoms';

const PokemonDetailPage = () => {
    const params = useParams()

    const { id } = params;
    const [pokemonData, setPokemonData] = useState<PokemonSpecies | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchPokemonData = async () => {
        try {
          if (id) {
            const pokemonId = parseInt(id as string);
            const pokemon = await getPokemonById(pokemonId);
            setPokemonData(pokemon);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching pokemon:', error);
        }
      };

      fetchPokemonData();
    }, [id]);

    if (loading) {
      return <Loader />;
    }
    
    if (!pokemonData && !loading) {
      return notFound();
    }

    return (
      <PokemonDetailContainer>
        <h2>{pokemonData?.name}</h2>
      </PokemonDetailContainer>
    );
};

export default PokemonDetailPage;
