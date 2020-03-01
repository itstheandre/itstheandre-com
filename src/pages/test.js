import React from "react"
import Layout from "../components/layout"
import { arrowLeft, arrowRight, guard } from "../utils/imageUpload"
import { Button } from "../styles/Buttons"
import { ProjectTemplate } from "../styles/S_Projects"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { fillTemplate } from "../lib/projectTemplate"

export const query = graphql`
  query AllProjects {
    allSanityProject {
      edges {
        node {
          techUsed
          link
          projectType
          projectNumber
          shortDescription
          title
          description
          slug {
            current
          }
          projectScreenshots {
            asset {
              fluid {
                src
              }
            }
          }
          text
          heroImage {
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

const Project = ({ data }) => {
  const {
    projectType,
    title,
    description,
    link,
    text,
    length,
    heroImage,
    tags,
  } = fillTemplate(data.allSanityProject.edges[0])

  return (
    <Layout>
      <ProjectTemplate img={heroImage} length={length}>
        <div className="hero">
          <div className="fw" />
        </div>
        <div className="content">
          <div className="tags">
            <div className="sectionText">Technologies</div>
            <div className="allTags">{tags}</div>
          </div>
          <div className="description">
            <div className="sectionText">{projectType}</div>
            <div className="h2">{title}</div>
            <div className="shortDescription">
              <ReactMarkdown source={description} />
              <a href={link} target="_blank" rel="noopener">
                <Button>Take me there</Button>
              </a>
              {/* </Link> */}
              <div className="text">{text.map(el => el)}</div>
            </div>
          </div>
        </div>
        <div className="anotherDiv">
          <div className="arrow">
            <img src={arrowLeft} alt="Previous Content" />
          </div>
          <div className="directions">Previous</div>
          <div className="empty"></div>
          <div className="directions">Next</div>
          <div className="arrow">
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </ProjectTemplate>
    </Layout>
  )
}

export default Project
