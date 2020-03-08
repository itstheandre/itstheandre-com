import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { ProjectSection, ProjectPageSection } from "../styles/S_Projects"
import SqProject from "../components/Projects/SqProject"
import { pic } from "../utils/imageUpload"
import { useNav } from "../lib/useNav"
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
  { ...obj, key: "2" },
  { ...obj, key: "3" },
  { ...obj, key: "4" },
]

const Projects = ({ data }) => {
  // console.log({ data })
  // console.log(data.allSanityProject.edges[0].node)
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
  console.log(allProjects)
  //   const { pageSize } = useBigPage()
  const { safeOptionToggle, safeOption } = useWrapper()

  useEffect(() => {
    safeOptionToggle(true)
    return () => {
      safeOptionToggle(false)
    }
  }, [safeOptionToggle])

  console.log({ safeOption })

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
