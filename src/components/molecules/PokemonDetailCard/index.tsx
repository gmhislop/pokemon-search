"use client";

import { Button } from "@/components/atoms";
import { ImageTest, Placeholder, PokeDetailContainer, PokedexImage, PokedexTitle, PokedexWrapper, RelationWrapper } from "./styled";

export const PokemonDetailCard = () => (
    <main>
     <PokeDetailContainer>
        <Button $variant="outline" href="/">Back</Button>
      <PokedexWrapper>
        <PokedexImage src={'/images/pokedex.png'} alt={'Pokedex'}></PokedexImage>
        <ImageTest src={'/images/pikachu.png'} alt={'Pikachu'} />
        <PokedexTitle>John Doe</PokedexTitle>
      </PokedexWrapper>
      <RelationWrapper>
      <Placeholder />
        <Placeholder />
        <Placeholder />
      </RelationWrapper>
     </PokeDetailContainer>
    </main>
)