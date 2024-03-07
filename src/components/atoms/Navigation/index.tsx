"use client";

import React from 'react';
import { Bar, NavigationItem, NavigationLink, NavigationList, NavigationToggle, SideNavigationContainer } from './styled';

const SideNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavigationToggle isOpen={isOpen} onClick={toggleNavigation}>
        <Bar/>
        <Bar/>
        <Bar/>
      </NavigationToggle>
      <SideNavigationContainer isOpen={isOpen}>
        <NavigationList>
          <NavigationItem><NavigationLink href="#">Home</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="#">Characters</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="#">Planets</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="#">About</NavigationLink></NavigationItem>
        </NavigationList>
      </SideNavigationContainer>
    </>
  );
};

export default SideNavigation;
