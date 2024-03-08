import { Button } from "@/components/atoms";
import * as i from "types";
import { ImageTest, Placeholder, PokeDetailContainer, PokedexImage, PokedexTitle, PokedexWrapper, RelationWrapper } from "./styled";


export const PokemonDetailCard = ({ pokemonData }: PokemonDetailCardProps) => {
  return (
    <PokeDetailContainer>
      <Button $variant="outline" href="/">Back</Button>
      <PokedexWrapper>
        <PokedexImage src={'/images/pokedex.png'} alt={'Pokedex'}/>
        <ImageTest src={pokemonData?.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites ?? ''} alt={pokemonData?.name ?? ''} width={100} height={100} loading={'lazy'} />
        <PokedexTitle>{pokemonData?.name}</PokedexTitle>
      </PokedexWrapper>
      <RelationWrapper>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </RelationWrapper>
    </PokeDetailContainer>
  );
};

type PokemonDetailCardProps = {
    pokemonData: i.PokemonSpecies | null;
  }