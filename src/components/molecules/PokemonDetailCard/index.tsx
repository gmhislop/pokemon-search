import { Button } from "@/components/atoms";
import Image from "next/image";
import * as i from "types";
import { PokeDetailContainer, PokedexImage, PokedexTitle, PokedexWrapper, PokemonDetailImage, PokemonRelationImage, PokemonTypeBackground, RelationWrapper } from "./styled";


export const PokemonDetailCard = ({ pokemonData, relationImages }: PokemonDetailCardProps) => {
  return (
    <PokeDetailContainer>
      <Button $variant="outline" href="/">Back</Button>
      <PokedexWrapper>
        <PokedexImage src={'/images/pokedex.png'} alt={'Pokedex'} />
        <PokemonDetailImage src={pokemonData?.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites ?? ''} alt={pokemonData?.name ?? ''} width={100} height={100} loading={'lazy'} />
        <PokedexTitle>{pokemonData?.name}</PokedexTitle>
      </PokedexWrapper>
      <RelationWrapper>
        {relationImages?.map((imageSrc: string, index) => (
          <PokemonRelationImage key={index} $typeColor="red">
            <Image width={200} height={200} src={imageSrc} alt="pokemon" />
          </PokemonRelationImage>
        ))}

        {!relationImages && (
          <>
            <PokemonTypeBackground $typeColor="red" />
            <PokemonTypeBackground $typeColor="blue" />
            <PokemonTypeBackground $typeColor="green" />
          </>
        )}
      </RelationWrapper>
    </PokeDetailContainer>
  );
};

type PokemonDetailCardProps = {
  pokemonData: i.PokemonSpecies | null;
  relationImages: string[] | null;
}