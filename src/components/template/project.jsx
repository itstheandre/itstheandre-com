import React from "react"
// import { graphql } from "gatsby"
// import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { fillTemplate } from "../../lib/projectTemplate"
import Layout from "../layout"
import { ProjectTemplate } from "../../styles/S_Projects"
import ReactMarkdown from "react-markdown"
import { Button } from "../../styles/Buttons"
import { arrowLeft, arrowRight } from "../../utils/imageUpload"

// export const query = graphql`
//   query($slug: String) {
//     sanityPost(slug: { current: { eq: $slug } }) {
//       title
//       slug {
//         current
//       }
//       body2
//     }
//   }
// `

export const query = graphql`
  query($slug: String, $previous: String, $after: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      client
      description
      heroImage {
        asset {
          fluid {
            src
          }
        }
      }
      imageTeaser {
        asset {
          fluid {
            src
          }
        }
      }
      link
      projectNumber
      projectType
      shortDescription
      slug {
        current
      }
      techUsed
      text
      team {
        id
        github
        name
      }
      projectScreenshots {
        asset {
          fluid {
            src
          }
        }
      }
    }
    previous: sanityProject(projectNumber: { eq: $previous }) {
      slug {
        current
      }
    }
    after: sanityProject(projectNumber: { eq: $after }) {
      slug {
        current
      }
    }
  }
`

const PostBody = styled.div`
  .test {
    width: 80vw;

    img {
      height: 100%;
      border: 10px solid black;
    }
    h2 {
      color: green;
    }
    p {
      color: red;
    }
    .Test3 {
      background: yellow;
    }
  }
`

// const Project = ({ data }) => {
const Project = ({ data }) => {
  const after = data?.after?.slug?.current
  const previous = data?.previous?.slug?.current
  console.log({ after })
  console.log({ previous })
  console.log({ data })
  const {
    projectType,
    title,
    description,
    link,
    text,
    length,
    heroImage,
    tags,
    client,
    team,
  } = fillTemplate(data.sanityProject)

  // console.log(data)
  // const postContent = data.sanityPost.body2

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
            <div className="client">
              {client === "Ironhack" ? <>Project</> : <>Client</>}
            </div>
            <div className="clientName">{client}</div>
          </div>
          <div className="description">
            <div className="sectionText">{projectType}</div>
            <div className="h2">{title}</div>
            <div className="shortDescription">
              <ReactMarkdown source={description} />
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button>Take me there</Button>
              </a>
              {/* </Link> */}
              <div className="text">{text.map(el => el)}</div>
            </div>
          </div>
        </div>
        <div className="anotherDiv">
          {previous ? (
            <>
              <div className="arrow">
                <Link to={`/projects/${previous}`}>
                  <img src={arrowLeft} alt="Previous Content" />
                </Link>
              </div>
              <div className="directions">
                <Link to={`/projects/${previous}`}>Previous</Link>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="empty"></div>
          {after ? (
            <>
              <div className="directions">
                <Link to={`/projects/${after}`}>Next</Link>
              </div>
              <div className="arrow">
                <Link to={`/projects/${after}`}>
                  <img src={arrowRight} alt="" />
                </Link>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </ProjectTemplate>
    </Layout>
  )
}

export default Project
