import React from "react"
import styled from "styled-components"
import { ProjectStyled } from "../../styles/S_Projects"

const SqProject = ({ info }) => {
  const { topic, projectName, img, content } = info
  console.log(info)
  return (
    <ProjectStyled img={img}>
      <div className="imageOverlay"></div>

      <div className="tags">
        <div className="sectionText">{topic}</div>
        <div className="h2">{projectName}</div>
      </div>
      <div className="content">{content}</div>
    </ProjectStyled>
  )
}

export default SqProject
