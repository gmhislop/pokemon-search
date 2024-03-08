import { media } from '@/styles/utils';
import styled from 'styled-components';
import { Button } from '..';

export const SideNavigationContainer = styled.div`
  position: fixed;
  z-index: 2;
`;

export const SideNavigationWrapper = styled.div<NavigationProps>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  border: 4px solid var(--link-color);
  transition: left 0.3s ease-in-out;

  ${media.tablet`
    width: 250px;
    border-radius: 0 10px 10px 0;
  `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--link-color);
  margin: 5px 0;
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
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const NavigationItem = styled.li`
  padding: 0.625rem 1.25rem;
`;

export const NavigationLink = styled(Button)`
  color: var(--link-color);
  text-decoration: none;
  font-size: 1.125rem;

  &:hover {
    color: var(--link-hover-color);
  }
`;

export const NavigationCloseButton = styled.button`
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background-color: blue;
    border: none;
    color: #fff;
    font-size: 1.25rem;
 cursor: pointer;
`;

type NavigationProps = {
    $isOpen: boolean;
  };
  
