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
          <h1 style={{textAlign: 'center'}}>
            <span role="img" aria-label="Grinning Face With Smiling Eyes">
              😄
            </span>{' '}
            Inscrição confirmada
          </h1>
          <p>
            Agora é só aguardar que entraremos em contato com você o mais breve
            possível
          </p>
        </Container>
      </Root>
    </>
  )
}

export default InscricaoObrigado
