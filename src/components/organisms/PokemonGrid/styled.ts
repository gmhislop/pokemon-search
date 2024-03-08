import styled from 'styled-components';

export const PokemonGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 20px;
`;
