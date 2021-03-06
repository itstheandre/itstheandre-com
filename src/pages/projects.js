import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { ProjectPageSection } from "../styles/S_Projects"
import SqProject from "../components/Projects/SqProject"

import { useEffect } from "react"
import { useWrapper } from "../Context/WrapperContext"
import { graphql } from "gatsby"

export const query = graphql`
  query AllProjectsPage {
    allSanityProject(sort: { order: DESC, fields: projectNumber }) {
      edges {
        node {
          _id
          # techUsed
          link
          projectType
          projectNumber
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

const ProjectsPage = styled.div`
  padding-top: 5.2rem;

  margin-bottom: 15rem;
  .sectionText {
    margin-bottom: 2.4rem;
  }
  .recentWork {
    font-family: var(--tt-mono);
    margin-bottom: 4.8rem;
    font-size: 3rem;
    font-weight: bold;
  }

  .h1 {
    margin-bottom: 4.8rem;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 360px) {
    width: 89%;
    margin: 0 auto;
  }
`

const Projects = ({ data }) => {
  const allProjects = data.allSanityProject.edges.map(({ node }) => {
    return {
      topic: node.projectType,
      content: node.shortDescription,
      projectName: node.title,
      link: node.link,
      img: node.imageTeaser.asset.fluid.src,
      key: node._id,
      slug: node.slug.current,
    }
  })
  //   const { pageSize } = useBigPage()
  const { safeOptionToggle } = useWrapper()

  useEffect(() => {
    safeOptionToggle(true)
    return () => {
      safeOptionToggle(false)
    }
  }, [safeOptionToggle])

  return (
    <Layout>
      <ProjectsPage>
        <div className="sectionText">Projects</div>
        <div className="h1">Recent Work</div>
        <ProjectPageSection>
          <div className="grid">
            {allProjects.map(el => (
              <SqProject key={el.key} info={el} />
            ))}
          </div>
        </ProjectPageSection>
      </ProjectsPage>
    </Layout>
  )
}

export default Projects
