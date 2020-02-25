import React from "react"
import styled from "styled-components"
import { ProjectStyled } from "../../styles/S_Projects"

const SqProject = () => {
  return (
    <ProjectStyled>
      <div className="imageOverlay"></div>

      <div className="tags">
        <div className="sectionText">Topic / Tag</div>
        <div className="h2">Project Name</div>
      </div>
      <div className="content">
        Breve descriçao do projeto. Hopefully curta mas que de para perceber o
        que é.
      </div>
    </ProjectStyled>
  )
}

export default SqProject
