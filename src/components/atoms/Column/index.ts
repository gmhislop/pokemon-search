import styled, { CSSProperties, css } from 'styled-components';

export const Column = styled.div<ColumnProps>(
  ({
    $gap = 0,
    $justifyContent = 'flex-start',
    $alignItems = 'flex-start',
    $margin = '0px',
    $isFullWidth = true,
    $isFullHeight,
  }) => css`
    display: flex;
    flex-direction: column;
    gap: ${$gap}px;
    justify-content: ${$justifyContent};
    align-items: ${$alignItems};
    margin: ${$margin};
    position: relative;

    ${$isFullWidth &&
    css`
      width: 100%;
    `}

    ${$isFullHeight &&
    css`
      height: 100%;
    `}
  `,
);

type ColumnProps = {
  $gap?: number;
  $justifyContent?: CSSProperties['justifyContent'];
  $alignItems?: CSSProperties['alignItems'];
  $margin?: CSSProperties['margin'];
  $isFullWidth?: boolean;
  $isFullHeight?: boolean;
};
