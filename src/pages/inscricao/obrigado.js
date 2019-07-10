import React from 'react'
import styled from 'styled-components'

import SEO from '../../components/SEO'

import bigHero from '../../../content/assets/big-hero.jpg'
import logo from '../../../content/assets/ft-logo.svg'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin: auto;
  min-height: 100vh;
  max-height: 100vh;
  padding: 5vw;

  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${bigHero});
  background-attachment: fixed;
  background-position: 90% center;
  background-repeat: no-repeat;
  background-size: cover;

  color: rgb(255, 255, 255);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1024px;
  padding: 16px;

  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
`

const InscricaoObrigado = ({data, location}) => {
  return (
    <>
      <SEO title="Obrigado por se inscrever" />
      <Root>
        <Container>
          <img
            src={logo}
            alt="Fonte Tecnologia"
            style={{height: '5em', marginBottom: '2em'}}
          />
          <h1 style={{textAlign: 'center'}}>Muito obrigado</h1>
          <p>
            <span role="img" aria-label="Inbox Tray">
              📥
            </span>{' '}
            Enviamos um e-mail de confirmação para o e-mail informado, é só
            entrar no seu e-mail e confirmar a sua inscrição
          </p>
          <p>
            <span role="img" aria-label="Thumbs Up">
              👍
            </span>{' '}
            Assim que inscrição for confirmada entraremos em contato o mais
            rápido possível
          </p>
        </Container>
      </Root>
    </>
  )
}

export default InscricaoObrigado
