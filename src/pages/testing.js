import React from "react"

// import Layout from "../components/layout"
import Layout from "../components/layout"
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

const ProjectGrid = styled.section`
  margin: 160px 0 48px;
  background: blue;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29.6rem, 1fr));
  grid-gap: 2.4rem;

  .project {
    padding-bottom: 83%;
    background: green;
    position: relative;
    background: url(${({ img }) => img}) no-repeat;
    background-size: cover;
    background-position: center;
    background-color: green;

    .imageOverlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      /* background-color: purple; */
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`

const ProjectStyled = styled.div`
  padding-bottom: 83%;
  background: green;
  position: relative;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: green;
  :hover {
    /* background-color: yellow; */
    .imageOverlay {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .sectionText {
      margin-bottom: 0;
    }

    .content {
      /* height: 30%; */
      padding-top: 3.2rem;
      height: 40%;
      padding-bottom: 4.2rem;
    }

    .tags {
      transform: translateY(-30%);
    }
  }

  .imageOverlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  .tags {
    width: 100%;
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    align-items: flex-start;
    margin: 0 2.4rem;
    padding-bottom: 3.2rem;
    color: white;
    transition: 0.5s ease;

    .sectionText {
      margin-bottom: 1.2rem;
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-color: red; */
    overflow: hidden;
    /* width: 100%; */
    height: 0;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2.4rem;
    color: white;
    font-size: 1.6rem;
  }
`

// const ProjectStyled = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   /* background-color: purple; */
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
// `

// const Projects = styled.article`
//   margin: 0 auto;
//   width: 29.6rem;
//   padding-bottom: 83%;
//   background: red;
// `

const Testing = () => {
  return (
    // <Layout>
    <Layout>
      <HeroText>Hero Text</HeroText>
      <Section>Section</Section>
      <H1>Big H1</H1>
      <H2>Big H2</H2>
      <BodyText>Body Text</BodyText>
      <ProjectGrid>
        <ProjectStyled>
          <div className="imageOverlay"></div>

          <div className="tags">
            <div className="sectionText">Topic / Tag</div>
            <div className="h2">Project Name</div>
          </div>
          <div className="content">
            Breve descriçao do projeto. Hopefully curta mas que de para perceber
            o que é.
          </div>
        </ProjectStyled>
        <ProjectStyled>
          <div className="imageOverlay"></div>
        </ProjectStyled>
        <ProjectStyled>
          <div className="imageOverlay"></div>
        </ProjectStyled>
      </ProjectGrid>
      {/* <div style={{ height: "100rem", backgroundColor: "blue" }}>Hi</div> */}
      {/* <div style={{ height: "100rem", backgroundColor: "red" }}>Hi</div> */}
      {/* <div style={{ height: "100rem", backgroundColor: "yellow" }}>Hi</div> */}
      <div style={{ backgroundColor: "black", height: "20vh" }}></div>
    </Layout>
    // </Layout>
  )
}

export default Testing
