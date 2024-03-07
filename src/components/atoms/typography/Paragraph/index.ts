import styled from 'styled-components';

export const paragraphSizes = {
    1: {
      size: '1rem',
      lineHeight: '1.5rem',
    },
    2: {
      size: '0.875rem',
      lineHeight: '1.25rem',
    },
  };

export const Paragraph = styled.p<ParagraphProps>`
  font-family: ${({ font }) => (font ?? 'Arial, sans-serif')};
  font-size: ${({ size }) => (size ? paragraphSizes[size].size : '1rem')};
  line-height: ${({ size }) => (size ? paragraphSizes[size].lineHeight : '1.5rem')};
  color: ${({ color }) => (color ?? 'black')};
  margin: 0;
`;

type ParagraphProps = {
    font?: string;
    size?: keyof typeof paragraphSizes;
    color?: string;
};

export default Paragraph;
