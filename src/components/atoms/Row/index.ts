import styled, { CSSProperties, css } from 'styled-components';

export const Row = styled.div<RowProps>(
  ({
    $gap = 0,
    $justifyContent = 'flex-start',
    $alignItems = 'flex-start',
    margin = '0px',
    $isFullWidth,
  }) => css`
    display: flex;
    gap: ${$gap}px;
    justify-content: ${$justifyContent};
    align-items: ${$alignItems};
    margin: ${margin};
    position: relative;

    ${$isFullWidth &&
    css`
      width: 100%;
    `};
  `,
);

type RowProps = {
  $gap?: number;
  $justifyContent?: CSSProperties['justifyContent'];
  $alignItems?: CSSProperties['alignItems'];
  margin?: CSSProperties['margin'];
  $isFullWidth?: boolean;
};
