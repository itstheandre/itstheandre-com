import React from "react"

import Layout from "../components/layout"
import Layout2 from "../components/layout2"
import styled from "styled-components"

const Section = styled.h3`
  font-family: var(--roboto);
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

const HeroText = styled.h1`
  /* font-family: var(--tt-mono); */
  font-weight: bold;
  line-height: 15rem;
  font-size: 12.875rem;
  color: black;
`

const H1 = styled.h1`
  font-size: 4rem;
`

const H2 = styled.h2`
  font-size: 3rem;
`

const BodyText = styled.p`
  font-size: 2rem;
`

const Testing = () => {
  return (
    <Layout>
      <Layout2>
        <HeroText>Hero Text</HeroText>
        <Section>Section</Section>
        <H1>Big H1</H1>
        <H2>Big H2</H2>
        <BodyText>Body Text</BodyText>
        {/* <div style={{ height: "100rem", backgroundColor: "blue" }}>Hi</div> */}
        {/* <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div> */}
        {/* <div style={{ height: "100rem", backgroundColor: "yellow" }}>Hi</div> */}
        <div style={{ backgroundColor: "black", height: "20vh" }}></div>
      </Layout2>
    </Layout>
  )
}

export default Testing
