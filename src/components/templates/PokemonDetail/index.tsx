"use client"

import * as i from 'types';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/atoms';
import { PokemonDetailCard } from '@/components/molecules';
import { getPokemonById, searchPokemonByName  } from '@/queries/pokemon';
import { notFound, useParams } from 'next/navigation';
import { PokemonDetailContainer } from './styled';
import { getPokemons } from '@/queries/pokemons';

const PokemonDetailPage = () => {
    const params = useParams()

    const { id, name } = params;
    const [pokemonData, setPokemonData] = useState<i.PokemonSpecies | null>(null);
    const [relationImages, setRelationImages] = useState<string[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    function getPokemonSpritesByEvolutionChain(pokemonSpeciesArray: any, selectedPokemonId: number) {
        let evolutionChainId = null;
        for (const species of pokemonSpeciesArray) {
          if (species.id === selectedPokemonId) {
            evolutionChainId = species.evolution_chain_id;
            break;
          }
        }
      
        if (evolutionChainId === null) {
          console.warn('No evolution chain found for the selected Pokémon ID.');
          return [];
        }
      
        const spritesArray = [];
        for (const species of pokemonSpeciesArray) {
          if (species.evolution_chain_id === evolutionChainId) {
            if (species.id === selectedPokemonId) continue;
            const pokemons = species.pokemon_v2_pokemons;
            for (const pokemon of pokemons) {
              const spritesInfo = pokemon.pokemon_v2_pokemonsprites;
              for (const sprite of spritesInfo) {
                spritesArray.push(sprite.sprites);
              }
            }
          }
        }
      
        return spritesArray;
    }
      

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
