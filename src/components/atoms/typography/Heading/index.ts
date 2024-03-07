import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export const Heading = styled.h1<HeadingProps>`
  ${({ as, align = 'left', weight = 600 }) => css`
    font-family: Roboto, sans-serif;
    font-size: ${getFontSize(as)}rem;
    line-height: ${getLineHeight(as)}rem;
    font-weight: ${weight};
    text-align: ${align};
    margin: 0;

    ${media.desktop`
      font-size: ${getMaxFontSize(as)}rem;
      line-height: ${getMaxLineHeight(as)}rem;
    `}
  `}
`;

const getFontSize = (as: HeadingProps['as']): number => {
  switch (as) {
    case 'h1':
      return 2.25;
    case 'h2':
      return 1.75;
    case 'h3':
      return 1.5;
    case 'h4':
      return 1.25;
    default:
      return 1;
  }
};

const getLineHeight = (as: HeadingProps['as']): number => {
  switch (as) {
    case 'h1':
      return 2.75;
    case 'h2':
      return 2.25;
    case 'h3':
      return 2;
    case 'h4':
      return 1.75;
    default:
      return 1.5;
  }
};

const getMaxFontSize = (as: HeadingProps['as']): number => {
  switch (as) {
    case 'h1':
      return 2.5;
    case 'h2':
      return 2;
    case 'h3':
      return 1.75;
    case 'h4':
      return 1.5;
    default:
      return 1.5;
  }
};

const getMaxLineHeight = (as: HeadingProps['as']): number => {
  switch (as) {
    case 'h1':
      return 3;
    case 'h2':
      return 2.5;
    case 'h3':
      return 2.25;
    case 'h4':
      return 2;
    default:
      return 1.5;
  }
};

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  align?: string;
  weight?: number;
}

export default Heading;
