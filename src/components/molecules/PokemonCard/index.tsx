import { Column } from '@/components/atoms/Column';
import React from 'react';
import { PokemonCardContainer, PokemonCardImage, PokemonCardInfo, PokemonCardTitle, PokemonCardType } from './styled';
import { TypeBadge } from '@/components/atoms/TypeBadge/styled'; // Make sure this import path is correct
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Row } from '@/components/atoms/Row';

const PokemonCard: React.FC<PokemonCardProps> = ({ title, image, types }) => {
  return (
    <PokemonCardContainer>
      <PokemonCardTitle as='h2'>{title.toUpperCase()}</PokemonCardTitle>
      <PokemonCardImage src={image} alt={title} width={200} height={200} />
      <Row $alignItems='center' $justifyContent='center' $gap={1}>
      {types.map((type, index) => (
        <TypeBadge key={index} color={type} />
      ))}
      </Row>
      <PokemonCardInfo>
        {types.map((type, index) => (
          <Column key={index} $alignItems='center' $justifyContent='center' $isFullHeight>
            <PokemonCardType color={type}>{type}</PokemonCardType>
          </Column>
        ))}
      </PokemonCardInfo>
    </PokemonCardContainer>
  );
};

type PokemonCardProps = {
  title: string;
  image: string | StaticImport;
  types: string[];
};

export default PokemonCard;