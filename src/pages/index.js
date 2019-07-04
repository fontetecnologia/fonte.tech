import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import BigHero from '../components/BigHero'
import MailChimp from '../components/MailChimp'

const HeroTitle = styled.h1`
  text-align: center;

  margin-bottom: 48px;

  @media (min-width: 400px) {
    margin-bottom: 0;
  }
`

const HeroHighLight = styled.span`
  color: rgb(47, 124, 192);
`

const LandingPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <BigHero>
        <HeroTitle>
          Conte com as nossas soluções de{' '}
          <HeroHighLight>desenvolvimento de software</HeroHighLight> e{' '}
          <HeroHighLight>outsourcing de equipes</HeroHighLight> para elevar o
          seu negócio a um mundo digital
        </HeroTitle>
        <MailChimp />
      </BigHero>
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
