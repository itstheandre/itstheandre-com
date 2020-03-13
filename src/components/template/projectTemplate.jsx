import React from "react"
// import styled from "styled-components"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { fillTemplate } from "../../lib/projectTemplateData"
import Layout from "../layout"
import { ProjectTemplate } from "../../styles/S_Projects"
import ReactMarkdown from "react-markdown"
import { Button } from "../../styles/Buttons"
import { arrowLeft, arrowRight } from "../../utils/imageUpload"
import { useDisplay } from "../../lib/displaySize"

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
            ...GatsbySanityImageFluid
          }
        }
      }
      phoneImage {
        asset {
          fluid {
            src
            ...GatsbySanityImageFluid
          }
        }
      }
      tabletImage {
        asset {
          fluid {
            src
            ...GatsbySanityImageFluid
          }
        }
      }
      heroBG
      imageTeaser {
        asset {
          fluid {
            src
            ...GatsbySanityImageFluid
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
            ...GatsbySanityImageFluid
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

// const Project = ({ data }) => {
const Project = ({ data, pageContext }) => {
  // console.log(props)
  // const { data } = props
  console.log(data)
  console.log(pageContext?.prevProject)
  const prevProject = pageContext?.prevProject?.slug?.current
  const nextProject = pageContext?.nextProject?.slug?.current
  const after = data?.after?.slug?.current
  const previous = data?.previous?.slug?.current
  const { pagePrefix } = pageContext

  const { display } = useDisplay()

  const {
    projectType,
    title,
    description,
    link,
    length,
    tags,
    client,
    team,
    Parsing,
    projectImages,
    heroBackground,
    teamValid,
    // projectScreenshotsArr,
  } = fillTemplate(data.sanityProject, display)

  const projectText = Parsing.map(el => {
    if (el.includes("#")) return <ReactMarkdown source={el} key={el} />
    else {
      return (
        <div className="examples" key={el}>
          {projectImages.map(el => el)}
        </div>
      )
    }
  })

  return (
    <Layout>
      <ProjectTemplate
        // img={heroImage}
        length={length}
        after={after}
        previous={previous}
      >
        <div className="hero">
          {/* <div className="fw" /> */}
          {heroBackground}
        </div>
        <div className="content">
          <div className="tags">
            <div className="sectionText">Technologies</div>
            <div className="allTags">{tags}</div>
            <div className="client">
              {client === "Ironhack" ? <>Project</> : <>Client</>}
            </div>
            <div className="clientName">{client}</div>
            {teamValid && (
              <>
                <div className="team client">Team</div>
                <div className="teamMembers">
                  {team.map(el => (
                    <>
                      <a
                        href={el.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {el.name}
                      </a>
                      <br />
                    </>
                  ))}
                </div>
              </>
            )}
            {/* <div className="team">Team</div> */}
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
              <div className="text">{projectText.map(el => el)}</div>
            </div>
          </div>
        </div>

        <div className="prevNext">
          {prevProject ? (
            <>
              <div className="arrow">
                <Link to={`${pagePrefix}${prevProject}`}>
                  <img src={arrowLeft} alt="Previous Content" />
                </Link>
              </div>
              <div className="directions">
                <Link to={`/projects/${prevProject}`}>Previous</Link>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="empty"></div>
          {nextProject ? (
            <>
              <div className="directions">
                <Link to={`${pagePrefix}${nextProject}`}>Next</Link>
              </div>
              <div className="arrow">
                <Link to={`${pagePrefix}${nextProject}`}>
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
