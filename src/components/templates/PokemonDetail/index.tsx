"use client";

import * as i from '@/types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/atoms';
import { PokemonDetailCard } from '@/components/molecules';
import { getPokemonById, getPokemonSpritesByEvolutionChain, searchPokemonByName } from '@/queries/pokemon';
import { notFound, useParams } from 'next/navigation';
import { PokemonDetailContainer } from './styled';
import { getPokemons } from '@/queries/pokemons';

const PokemonDetailPage = () => {
  const params = useParams()

  const { id, name } = params;
  const [pokemonData, setPokemonData] = useState<i.PokemonSpecies | null>(null);
  const [relationImages, setRelationImages] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const pokemonId = parseInt(id as string);
          const pokemon = await getPokemonById(pokemonId);
          setPokemonData(pokemon);
        } else if (name) {
          const pokemon = await searchPokemonByName(name);
          setPokemonData(pokemon);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pokemon:', error);
      }
    };

    fetchData();

    const fetchAllPokemonsData = async () => {
      try {
        const data = await getPokemons();
        const images = getPokemonSpritesByEvolutionChain(data.pokemon_v2_pokemonspecies, parseInt(id as string))
        console.log(images)
        setRelationImages(images);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
        setLoading(false);
      }
    };

    fetchAllPokemonsData();
  }, [id, name]);

  if (loading) {
    return <Loader />;
  }

  if (!pokemonData) {
    return notFound();
  }

  return (
    <PokemonDetailContainer>
      <PokemonDetailCard pokemonData={pokemonData} relationImages={relationImages} />
    </PokemonDetailContainer>
  );
};

export default PokemonDetailPage;
