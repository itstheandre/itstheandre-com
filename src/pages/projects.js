import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { ProjectSection } from "../styles/S_Projects"
import SqProject from "../components/Projects/SqProject"
import { pic } from "../utils/imageUpload"
import { useNav } from "../lib/useNav"
import { useEffect } from "react"
import { useWrapper } from "../Context/WrapperContext"

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

const Projects = () => {
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
        <ProjectSection>
          <div className="grid">
            {arrTest.map(el => (
              <SqProject key={el.key} info={el} />
            ))}
          </div>
        </ProjectSection>
      </ProjectsPage>
    </Layout>
  )
}

export default Projects
