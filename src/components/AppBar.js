import React from 'react'
import styled from 'styled-components'

import {Link as GatsbyLink} from 'gatsby'

import logo from '../../content/assets/ft-logo.svg'
import icon from '../../content/assets/ft-icon.svg'

const Root = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 96px;
  padding: 16px;

  background-color: rgba(0, 0, 0, 0.85);
`

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  max-width: 1024px;
`

const StyledLogo = styled.div`
  height: 100%;
  width: 100%;

  background-image: url(${icon});
  background-position: left;
  background-repeat: no-repeat;
  background-size: auto;

  @media (min-width: 900px) {
    background-image: url(${logo});
  }
`

const NavList = styled.ul`
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  color: rgb(255, 255, 255);
  margin-left: 24px;

  @media (min-width: 900px) {
    margin-left: 32px;
  }
`

const Link = styled(GatsbyLink)`
  color: rgb(255, 255, 255);
  text-decoration: none;

  &:hover,
  &[aria-current='page'] {
    color: rgb(150, 150, 150);
    text-decoration: none;
  }

  transition: color 0.7s ease;
`

const AppBar = () => {
  return (
    <Root>
      <Container>
        <StyledLogo />
        <nav>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/servicos">Serviços</Link>
            </NavItem> */}
            <NavItem>
              <Link to="/blog">Blog</Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/contato">Contato</Link>
            </NavItem> */}
          </NavList>
        </nav>
      </Container>
    </Root>
  )
}

export default AppBar
