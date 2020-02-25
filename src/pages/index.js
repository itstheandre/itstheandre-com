import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Header } from "../styles/S_Layout"
import { Button } from "../styles/Buttons"
import { useWrapper } from "../Context/WrapperContext"
import SqProject from "../components/Projects/SqProject"
import { ProjectGrid, ProjectSection } from "../styles/S_Projects"
import ContactForm from "../components/HomePage/ContactForm"

const Page = styled.main`
  width: 100%;
  /* background-color: red; */

  main {
    /* padding-top: 15vh; */
  }

  header {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    pointer-events: none;
    margin-bottom: 16rem;
  }

  .fw {
    width: 100vw;
    pointer-events: none;

    height: 100%;
    background-color: black;
    position: absolute;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    z-index: -100;
  }

  .sectionText {
    margin-bottom: 2.4rem;
  }

  .h1 {
    margin-bottom: 4rem;
  }

  .gridded {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
    margin-bottom: 17.6rem;

    .body {
      line-height: 2.4rem;
    }
  }
`

const Index = () => {
  const { ref } = useWrapper()
  return (
    <div>
      <Layout>
        <Page>
          <main>
            <header className="fwWrapper">
              <h1 className="heroText">
                I make your <span>dreams</span>, I mean, ideas come true
              </h1>
              <div className="fw" ref={ref}></div>
            </header>

            <ProjectSection>
              <div className="grid">
                {[1, 2, 3].map(el => (
                  <SqProject />
                ))}
              </div>
              <div className="seeAllProjects">
                <Button styleType="secondary">See all projects</Button>
              </div>
            </ProjectSection>
            <div className="aboutMeWrapper">
              <div className="sectionText">About</div>
              <div className="h1">
                I’m a full stack developer with a passion for audio and
                technology
              </div>
              <div className="gridded">
                <div className="aboutMe">
                  <div className="sectionText">Experience</div>
                  <div className="body">
                    From Marketing to Sales and now Web Development,  I’m
                    someone who’s interested in helping companies grow and
                    achieve amazing things.
                  </div>
                </div>
                <div className="aboutMe">
                  <div className="sectionText">Technologies</div>
                  <div className="body">
                    From HTML5 to Redux, I’m always making sure I’m learning and
                    improving the skills I have - always trying to follow the
                    trends I see or be ahead of them if possible.
                  </div>
                </div>
              </div>
            </div>
          </main>
          <ContactForm />
        </Page>
      </Layout>
    </div>
  )
}

export default Index
