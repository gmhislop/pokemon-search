"use client";

import * as i from 'types';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/atoms';
import { PokemonDetailCard } from '@/components/molecules';
import { getPokemonById } from '@/queries/pokemon';
import { notFound, useParams } from 'next/navigation';
import { PokemonDetailContainer } from './styled';

const PokemonDetailPage = () => {
    const params = useParams()

    const { id } = params;
    const [pokemonData, setPokemonData] = useState<i.PokemonSpecies | null>(null);
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
        <PokemonDetailCard pokemonData={pokemonData} />
      </PokemonDetailContainer>
    );
};

export default PokemonDetailPage;
