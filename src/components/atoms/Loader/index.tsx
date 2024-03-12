import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 0.375rem solid #f3f3f3;
  border-top: 0.375rem solid ${({ theme }) => theme.colors.link};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${spin} 1s linear infinite;
`;

const LoaderAnimation = () => {
  return <Loader data-testid="loader" />;
};

export default LoaderAnimation;
