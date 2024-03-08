import React from 'react';
import { Column } from '@/components/atoms/Column';
import { Row } from '@/components/atoms/Row';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { PokemonCardContainer, PokemonCardId, PokemonCardImage, PokemonCardInfo, PokemonCardTitle, PokemonCardType, PokemonLink } from './styled';

const PokemonCard = ({ title, image, types, id }:PokemonCardProps) => {
  return (
    <PokemonLink href={`/pokemon/${id}`}>
    <PokemonCardContainer>
      <PokemonCardTitle as='h2'>{title.toUpperCase()}</PokemonCardTitle>
      <PokemonCardImage src={image} alt={title} width={200} height={200} />
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

export default PokemonCard;