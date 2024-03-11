import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

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
  border-top: 0.375rem solid var(--link-color);
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: ${spin} 1s linear infinite;
`;

const LoaderAnimation = () => {
  return <Loader>
    <Image src={'vector/pokeball.svg'} alt={'Pokeball'} width={200} height={200} />
  </Loader>
};

export default LoaderAnimation;
