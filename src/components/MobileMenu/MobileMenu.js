/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { QUERIES, WEIGHTS } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink style={{ '--nav-link-index': 0 }} href='/sale'>
            Sale
          </NavLink>
          <NavLink style={{ '--nav-link-index': 1 }} href='/new'>
            New&nbsp;Releases
          </NavLink>
          <NavLink style={{ '--nav-link-index': 2 }} href='/men'>
            Men
          </NavLink>
          <NavLink style={{ '--nav-link-index': 3 }} href='/women'>
            Women
          </NavLink>
          <NavLink style={{ '--nav-link-index': 4 }} href='/kids'>
            Kids
          </NavLink>
          <NavLink style={{ '--nav-link-index': 5 }} href='/collections'>
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink href='/terms'>Terms and Conditions</SubLink>
          <SubLink href='/privacy'>Privacy Policy</SubLink>
          <SubLink href='/contact'>Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const bg_fadeIn = keyframes`
  from {
    background: initial;
  }
  to {
    background: var(--color-backdrop);
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%) ;
  }
`

const closingDoor = keyframes`
  from {
    transform:rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${bg_fadeIn} 750ms;
    animation-fill-mode: both;
  }
`

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  transform-origin: right center;
  will-change: opacity, transform;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${closingDoor} 1000ms;
    animation-fill-mode: both;
    animation-delay: 200ms;

    & > * {
      animation: ${fadeIn} 250ms;
      animation-fill-mode: both;
      animation-delay: 500ms;
    }
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  will-change: opacity;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 200ms;
    animation-fill-mode: both;
    animation-delay: calc(750ms + var(--nav-link-index) * 100ms);
  }
`

const Filler = styled.div`
  flex: 1;
`
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`

export default MobileMenu
