import { Button } from "@/components/atoms";
import Image from "next/image";
import * as i from "types";
import { PokeDetailContainer, PokedexImage, PokedexTitle, PokedexWrapper, PokemonDetailImage, PokemonRelationImage, PokemonTypeBackground, RelationWrapper } from "./styled";
import { getTypeColor } from "@/services/getColor";
export const PokemonDetailCard = ({ pokemonData, relationImages }: PokemonDetailCardProps) => {

  const pokemonTypeColor = pokemonData?.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes_aggregate.nodes[0].pokemon_v2_type.name;
  return (
    <PokeDetailContainer>
      <Button $variant="outline" href="/">Back</Button>
      <PokedexWrapper>
        <PokedexImage src={'/images/pokedex.png'} alt={'Pokedex'} />
        <PokemonDetailImage src={pokemonData?.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites ?? ''} alt={pokemonData?.name ?? ''} width={100} height={100} loading={'lazy'} />
        <PokedexTitle>{pokemonData?.name}</PokedexTitle>
      </PokedexWrapper>
      <RelationWrapper>
        {relationImages?.map((imageSrc: string) => (
          <PokemonRelationImage key={imageSrc} $typeColor={getTypeColor(pokemonTypeColor ?? '')}>
            <Image width={200} height={200} src={imageSrc} alt="pokemon" />
          </PokemonRelationImage>
        ))}
        {!relationImages && (
          <>
            {pokemonData?.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes_aggregate.nodes.map((typeNode) => (
              <PokemonTypeBackground key={typeNode.type_id} $typeColor={getTypeColor(typeNode.pokemon_v2_type.name)}>
                {typeNode.pokemon_v2_type.name}
              </PokemonTypeBackground>
            ))}
          </>
        )}
      </RelationWrapper>
    </PokeDetailContainer>
  );
};

type PokemonDetailCardProps = {
  pokemonData: i.PokemonSpecies | null;
  relationImages: string[] | null;
};
