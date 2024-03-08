import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPokemonById } from '@/queries/pokemon';
import { PokemonSpecies } from 'types';
import { notFound } from 'next/navigation';

const PokemonDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [pokemonData, setPokemonData] = useState<PokemonSpecies | null>(null);

    useEffect(() => {
      const fetchPokemonData = async () => {
        try {
          if (id) {
            const pokemonId = parseInt(id as string);
            const pokemon = await getPokemonById(pokemonId);
            setPokemonData(pokemon);
          }
        } catch (error) {
          console.error('Error fetching pokemon:', error);
        }
      };

      fetchPokemonData();
    }, [id]);

    if (!pokemonData) {
      return notFound();
    }

    return (
      <div>
        <h2>{pokemonData.name}</h2>
      </div>
    );
};

export default PokemonDetailPage;
