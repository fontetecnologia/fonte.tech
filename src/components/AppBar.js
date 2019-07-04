import React from 'react'
import styled from 'styled-components'

import {Link as GatsbyLink} from 'gatsby'

import Logo from '../../content/assets/ft-logo.svg'

const Root = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 96px;
  padding: 16px;

  background-color: rgba(0, 0, 0, 0.85);
`

const StyledLogo = styled(Logo)`
  height: 100%;
`

const NavList = styled.ul`
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  color: rgb(255, 255, 255);
  margin-left: 32px;
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
      <StyledLogo />
      <nav>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/servicos">Serviços</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/contato">Contato</Link>
          </NavItem>
        </NavList>
      </nav>
    </Root>
  )
}

export default AppBar
