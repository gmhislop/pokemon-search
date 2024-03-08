"use client";

import React from 'react';
import { Bar, HomeButton, NavigationItem, NavigationLink, NavigationList, NavigationToggle, Overlay, SideNavigationContainer, SideNavigationWrapper } from './styled';
import Image from 'next/image';
import { Column } from '../Column';
import Logo from 'vectors/logo.svg';

const SideNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideNavigationContainer>
      <NavigationToggle $isOpen={isOpen} onClick={toggleNavigation}>
        <Bar/>
        <Bar/>
        <Bar/>
      </NavigationToggle>
      <Column $isFullWidth $alignItems='center' $justifyContent='center'>
      <HomeButton href="/">
      <Image src={Logo} alt="Pokemon" width={150} height={50} />
      </HomeButton>
      </Column>
      <SideNavigationWrapper $isOpen={isOpen}>
        <NavigationList>
          <NavigationItem><NavigationLink href="/">Home</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="/about">About</NavigationLink></NavigationItem>
        </NavigationList>
      </SideNavigationWrapper>
      {isOpen && <Overlay onClick={toggleNavigation}/>}
    </SideNavigationContainer>
  );
};

export default SideNavigation;
