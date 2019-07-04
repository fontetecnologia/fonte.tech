import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin: auto;
  min-height: 100vh;
  padding: 96px 5vw;

  @media (min-width: 400px) {
    padding: 96px 20vw;
  }

  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${({bgSrc}) => bgSrc});
  background-attachment: fixed;
  background-position: 90% center;
  background-repeat: no-repeat;
  background-size: cover;

  color: rgb(255, 255, 255);
`

const BigHero = ({children}) => {
  const data = useStaticQuery(graphql`
    query BigHeroQuery {
      background: file(absolutePath: {regex: "/big-hero.jpg/"}) {
        publicURL
      }
    }
  `)

  const {
    background: {publicURL: bgSrc},
  } = data

  return <Root bgSrc={bgSrc}>{children}</Root>
}

export default BigHero
