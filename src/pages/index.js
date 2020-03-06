import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Header, Page } from "../styles/S_Layout"
import { Button } from "../styles/Buttons"
import { useWrapper } from "../Context/WrapperContext"
import SqProject from "../components/Projects/SqProject"
import { ProjectGrid, ProjectSection } from "../styles/S_Projects"
import ContactForm from "../components/HomePage/ContactForm"
import { pic } from "../utils/imageUpload"
import { graphql } from "gatsby"

export const query = graphql`
  query INDEX_PAGE {
    allSanityProject(sort: { order: DESC, fields: projectNumber }) {
      edges {
        node {
          _id
          # techUsed
          projectType
          # projectNumber
          shortDescription
          title
          # description
          # team {
          #   name
          #   github
          # }
          # client
          slug {
            current
          }
          # projectScreenshots {
          #   asset {
          #     fluid {
          #       src
          #     }
          #   }
          # }
          # text
          imageTeaser {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

const obj = {
  topic: "Topic / Tag",
  projectName: "Project Name",
  img: pic,
  content:
    "Breve descriçao do projeto. Hopefully curta mas que de para perceber o que é.",
}

const arrTest = [
  { ...obj, key: "1" },
  { ...obj, key: 2 },
  { ...obj, key: 3 },
]
const Index = ({ data }) => {
  const { ref, textChange } = useWrapper()

  const allProjects = data.allSanityProject.edges
    .slice(0, 3)
    .map(({ node }) => {
      return {
        topic: node.projectType,
        content: node.shortDescription,
        projectName: node.title,
        img: node.imageTeaser.asset.fluid.src,
        key: node._id,
        slug: node.slug.current,
      }
    })

  return (
    <div>
      <Layout>
        <Page>
          <main>
            <header className="fwWrapper" ref={textChange}>
              <div className="sectionText">Hey! Its the andre here</div>
              <h1 className="heroText">
                I make your <span>dreams</span>, I mean, ideas come true
              </h1>
              <div className="fw" ref={ref}></div>
            </header>

            <ProjectSection>
              <div className="grid">
                {allProjects.map(el => (
                  <SqProject key={el.key} info={el} />
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
