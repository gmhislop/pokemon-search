import React from 'react';
import { TypeBadge } from './styled';

const TypeBadges = ({ type }: TypeBadgesProps) => {
  return (
    <TypeBadge color={type} />
  );
};

type TypeBadgesProps = {
  type: string;
};

export default TypeBadges;