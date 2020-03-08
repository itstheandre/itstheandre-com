import React from "react"
import { ProjectStyled } from "../../styles/S_Projects"
import { Link } from "gatsby"

const SqProject = ({ info }) => {
  const { topic, projectName, img, content, slug } = info
  return (
    <Link to={`/projects/${slug}`}>
      <ProjectStyled img={img}>
        <div className="alwaysOverlay"></div>
        <div className="imageOverlay"></div>

        <div className="tags">
          <div className="sectionText">{topic}</div>
          <div className="h2">{projectName}</div>
        </div>
        <div className="content">{content}</div>
      </ProjectStyled>
    </Link>
  )
}

export default SqProject
