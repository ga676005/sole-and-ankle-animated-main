import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale" data-before="Sale">
            Sale
          </NavLink>
          <NavLink href="/new" data-before="New&nbsp;Releases">
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" data-before="Men">
            Men
          </NavLink>
          <NavLink href="/women" data-before="Women">
            Women
          </NavLink>
          <NavLink href="/kids" data-before="Kids">
            Kids
          </NavLink>
          <NavLink href="/collections" data-before="Collections">
            Collections
          </NavLink>

          {/*
            // style A
          <NavLink href="/sale">
            <span>Sale</span>
            <span aria-hidden>Sale</span>
          </NavLink>
          <NavLink href="/new">
            <span>New&nbsp;Releases</span>
            <span aria-hidden>New&nbsp;Releases</span>
          </NavLink>
          <NavLink href="/men">
            <span>Men</span>
            <span aria-hidden>Men</span>
          </NavLink>
          <NavLink href="/women">
            <span>Women</span>
            <span aria-hidden>Women</span>
          </NavLink>
          <NavLink href="/kids">
            <span>Kids</span>
            <span aria-hidden>Kids</span>
          </NavLink>
          <NavLink href="/collections">
            <span>Collections</span>
            <span aria-hidden>Collections</span>
          </NavLink> */}
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  display: flex;
  flex-direction: column;


  &:first-of-type {
    color: var(--color-secondary);
  }

  @media (prefers-reduced-motion: no-preference) {
    /* style A  
      overflow: hidden;
      height: 36px;
    */

    /* & span {
      transition: transform 200ms ease-out;
    }
  
    & span:nth-child(2){
      transform: translateY(100%);
      font-weight: bold;
    }
  
    &:hover span:first-child {
      transform: translateY(-100%);
    }
  
    &:hover span:nth-child(2) {
      transform: translateY(-100%);
    } */

    /* style B */
    padding: 5px 0;
    position: relative;
    isolation: isolate;
    &::before {
      position: absolute;
      content: attr(data-before);
      top:0;
      left: 0;
      padding: 5px 0 5px;
      max-width: 0;
      overflow: hidden;
      color: var(--color-secondary);
      transition: max-width 300ms ease-in;
      will-change: max-width;
      /* border-bottom: 2px solid var(--color-secondary); */
    }
    &:hover::before {
      max-width: 100%;
    }

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-secondary);
      transform: scaleX(0);
      transform-origin: left;
      transition: 300ms ease-in;
      transition-property: transform, transform-origin;
    }

    &:hover::after {
      transform-origin: right;
      transform: scaleX(1);
    }
  }
`;

export default Header;
