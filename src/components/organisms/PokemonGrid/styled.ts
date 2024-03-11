import { media } from '@/styles/utils';
import styled from 'styled-components';

export const PokemonGridContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));

  ${media.desktop`
    grid-template-columns: repeat(auto-fill, minmax(400px, 3fr));
  `}
`;
