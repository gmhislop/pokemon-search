import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Loader = styled.div`
  border: 0.375rem solid #f3f3f3;
  border-top: 0.375rem solid var(--link-color);
  border-radius: 50%;
  width: 5rem;
  height: 5rem; 
  animation: ${spin} 1s linear infinite;
`;

const LoaderAnimation = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export default LoaderAnimation;
