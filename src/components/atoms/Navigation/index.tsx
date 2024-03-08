"use client";

import React from 'react';
import { Bar, NavigationItem, NavigationLink, NavigationList, NavigationToggle, SideNavigationContainer, SideNavigationWrapper } from './styled';

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
      <SideNavigationWrapper $isOpen={isOpen}>
        <NavigationList>
          <NavigationItem><NavigationLink href="#">Home</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="#">Characters</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="#">Planets</NavigationLink></NavigationItem>
          <NavigationItem><NavigationLink href="#">About</NavigationLink></NavigationItem>
        </NavigationList>
      </SideNavigationWrapper>
    </SideNavigationContainer>
  );
};

export default SideNavigation;
