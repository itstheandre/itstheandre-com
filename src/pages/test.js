import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import {
  casaDePapel,
  arrowLeft,
  arrowRight,
  guard,
  thief,
} from "../utils/imageUpload"
import { Tags, Button } from "../styles/Buttons"
import { ProjectTemplate } from "../styles/S_Projects"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"

export const query = graphql`
  query AllProjects {
    allSanityProject {
      edges {
        node {
          techUsed
          specialThanks
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
  const ProjectInfo = data.allSanityProject.edges[0].node
  // console.log(Casa)
  // const ProjectInfo = data.allSanityProject.edges.reduce(
  //   (acc, { node }) => node,
  //   {}
  // )

  console.log(ProjectInfo)
  const Parsing = ProjectInfo.text.split("---")

  const text = Parsing.map(el => {
    if (el.includes("#")) {
      return <ReactMarkdown source={el} key={el} />
    } else {
      return (
        <div className="examples" key={el}>
          {ProjectInfo.projectScreenshots.map(el => (
            <img src={el.asset.fluid.src} key={el.asset.id} />
          ))}
        </div>
      )
    }
  })

  const length = ProjectInfo.projectScreenshots.length > 1 ? 2 : 1

  return (
    <Layout>
      <ProjectTemplate
        img={ProjectInfo.heroImage.asset.fluid.src}
        length={length}
      >
        <div className="hero">
          <div className="fw" />
        </div>
        <div className="content">
          <div className="tags">
            <div className="sectionText">Technologies</div>
            <div className="allTags">
              {ProjectInfo.techUsed.map(el => (
                <Tags key={el}>{el}</Tags>
              ))}
            </div>
          </div>
          <div className="description">
            <div className="sectionText">{ProjectInfo.projectType}</div>
            <div className="h2">{ProjectInfo.title}</div>
            <div className="shortDescription">
              <ReactMarkdown source={ProjectInfo.description} />
              <a href={ProjectInfo.link} target="blank">
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
