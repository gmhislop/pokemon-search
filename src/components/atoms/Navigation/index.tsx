"use client";

import Image from 'next/image';
import React from 'react';
import Logo from 'vectors/logo.svg';
import { Button, Column } from '..';
import { Bar, HomeButton, NavigationItem, NavigationLink, NavigationList, NavigationToggle, Overlay, PokeballContainer, PokeballImage, PokemonDialog, PokemonDialogDescription, SideNavigationContainer, SideNavigationWrapper } from './styled';
import GoImage from 'vectors/go.svg';

const SideNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef<HTMLDialogElement>(null);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const handlePokeballClick = () => {
    setIsOpen(false);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <SideNavigationContainer>
      <NavigationToggle $isOpen={isOpen} onClick={toggleNavigation}>
        <Bar />
        <Bar />
        <Bar />
      </NavigationToggle>
      <Column $isFullWidth $alignItems='center' $justifyContent='center'>
        <HomeButton href="/">
          <Image src={Logo} alt="Pokemon" width={150} height={50} loading='lazy' />
        </HomeButton>
      </Column>
      <SideNavigationWrapper $isOpen={isOpen}>
        <NavigationList>
          <NavigationItem><NavigationLink href="/pokemon">Home</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="/about">About</NavigationLink></NavigationItem>
        </NavigationList>
        <PokeballContainer onClick={handlePokeballClick}>
          <PokeballImage src={'/images/pokeball.png'} alt={'pokeball'} loading='lazy' width={120} height={120} />
        </PokeballContainer>
        <PokemonDialog ref={modalRef}>
          <Image src={GoImage} alt={'go'} width={80} height={80} />
          <PokemonDialogDescription size={2}>{`Welcome, fellow trainer! Ready to dive into the Poké-verse? Brace yourself for a whirlwind of Pokémon adventures! But hey, did you catch 'em all yet? Get ready to catch 'em, battle 'em, and laugh 'em off as we journey through the wild world of Pokémon together! Dont forget to catch em all!`}</PokemonDialogDescription>
          <Button $variant='filled' onClick={closeModal}>Close</Button>
        </PokemonDialog>
      </SideNavigationWrapper>
      {isOpen && <Overlay onClick={toggleNavigation} />}
    </SideNavigationContainer>
  );
};

export default SideNavigation;
