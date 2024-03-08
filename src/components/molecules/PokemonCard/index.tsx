import React from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { PokeBallImage, PokemonCardContainer, PokemonCardId, PokemonCardImage, PokemonCardInfo, PokemonCardTitle, PokemonCardType, PokemonLink } from './styled';
import { Row, Column } from '@/components/atoms';

export const PokemonCard = ({ title, image, types, id }:PokemonCardProps) => {
  return (
    <PokemonLink href={`/pokemon/${id}`}>
    <PokemonCardContainer>
      <PokemonCardTitle as='h2'>{title.toUpperCase()}</PokemonCardTitle>
      <PokemonCardImage src={image} alt={title} width={200} height={200} loading='lazy' />
      <Row $alignItems='left' $justifyContent='center' $gap={1}>
        <PokemonCardId>#{id}</PokemonCardId>
      </Row>
      <PokemonCardInfo>
        {types.map((type, index) => (
          <Column key={index} $alignItems='center' $justifyContent='center' $isFullHeight>
            <PokemonCardType color={type}>{type}</PokemonCardType>
          </Column>
        ))}
      </PokemonCardInfo>
      <PokeBallImage src={'/images/pokeball.png'} alt={'pokeball'} width={120} height={120} loading='lazy' />
    </PokemonCardContainer>
    </PokemonLink>
  );
};

type PokemonCardProps = {
  id: number;
  title: string;
  image: string | StaticImport;
  types: string[];
};
