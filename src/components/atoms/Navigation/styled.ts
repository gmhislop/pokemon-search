import { media } from '@/styles/utils';
import Image from 'next/image';
import styled from 'styled-components';
import { Button, Paragraph } from '..';
import Link from 'next/link';

export const SideNavigationContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SideNavigationWrapper = styled.div<NavigationProps>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 4px solid ${({ theme }) => theme.colors.link};
  transition: left 0.3s ease-in-out;
  z-index: 2;

  ${media.tablet`
    width: 16rem;
    height: 31.25rem;
    border-radius: 0 20px 20px 0;
  `}
`;

export const HomeButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const PokeballContainer = styled.div`
  cursor: pointer;
  z-index: 100;
`;

export const PokeballImage = styled(Image)`
  position: absolute;
  bottom: 12rem;
  right: 50%;
  margin-top: 6.25rem;
  transform: translate(50%, 50%);
  z-index: 2;
  transition: transform 0.3s ease-in-out;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease-in-out;
  z-index: 1;
`;

export const Bar = styled.div`
  width: 1.563rem;
  height: 0.188rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin: 0.313rem 0;
  transition: transform 0.3s ease-in-out;
`;

export const NavigationToggle = styled.div<NavigationProps>`
  position: absolute;
  z-index: 3;
  top: 1.25rem;
  left: 1.25rem;
  cursor: pointer;

  :nth-child(1) {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg) translate(0.313rem, 0.313rem)' : 'none')};
  }

  :nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  :nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg) translate(0.438rem, -0.438rem)' : 'none')};
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0.313rem;
  border-radius: 1.25rem;
  border: 0.25rem solid transparent;
  gap: 1.25rem;
`;

export const NavigationItem = styled.li`
`;

export const NavigationLink = styled(Link)`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  text-decoration: none;
  padding: 0.625rem 1.25rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 1.25rem;
  cursor: pointer; 
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.4);
    border: 0.5px solid ${({ theme }) => theme.colors.link};
  }
  font-size: 2rem;

  &:hover {
    &:after {
      content: '';
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
      background-image: url('/images/pokeball.png');
      background-size: cover;
    }
  }
`;

export const PokemonDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 1.25rem;
  max-width: 480px;
  transform: translate(-50%, -50%);
  border: 0.25rem solid ${({ theme }) => theme.colors.link};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const PokemonDialogDescription = styled(Paragraph)`
  margin-bottom: 1.25rem;
  word-spacing: 6px;
  font-weight: 900;
`;

type NavigationProps = {
  $isOpen: boolean;
};
