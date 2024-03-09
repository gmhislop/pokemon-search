import React from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Divider, DividerWrapper, PokeBallImage, PokemonCardContainer, PokemonCardId, PokemonCardImage, PokemonCardInfo, PokemonCardTitle, PokemonCardType, PokemonLink } from './styled';
import { Column, Row } from '@/components/atoms';
import { getTypeColor } from '@/services/getColor';
import { TypeBadge } from '@/components/atoms/TypeBadge/styled';

export const PokemonCard = ({ title, image, types, id }: PokemonCardProps) => {
  return (
    <PokemonLink href={`/pokemon/${id}`}>
      <PokemonCardContainer $typeColor={getTypeColor(types[0])}>
        <Row $alignItems='center' $justifyContent='space-between' $isFullWidth>
          <PokemonCardTitle as='h2'>{title}</PokemonCardTitle>
          <TypeBadge color={getTypeColor(types[0])} />
        </Row>
        <PokemonCardImage src={image} alt={title} width={200} height={200} quality={30} loading='lazy' />
        <PokemonCardId>#{id}</PokemonCardId>
        <PokemonCardInfo>
          {types.map((type, index) => (
            <Row key={index} $alignItems='center' $justifyContent='center' $isFullWidth>
              <TypeBadge key={index} color={getTypeColor(type)} /><PokemonCardType>{type}
              </PokemonCardType>
            </Row>
          ))}
        </PokemonCardInfo>
        <DividerWrapper $gap={16} $isFullHeight>
          <Divider />
          <Divider />
        </DividerWrapper>
        <PokeBallImage src={'/images/pokeball.png'} alt={'pokeball'} width={120} height={120} loading='lazy' />
      </PokemonCardContainer>
    </PokemonLink >
  );
};

type PokemonCardProps = {
  id: number;
  title: string;
  image: string | StaticImport;
  types: string[];
};
