import React from "react"
import styled, { css } from "styled-components"

const BodyContainer = styled.div`
  width: 75%;
  max-width: 936px;
  margin: 0 auto;
`

const HeroMain = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  margin-bottom: 16rem;
  section {
    max-width: 936px;
    margin: 0 auto;
    color: white;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      text-decoration: line-through;
    }
  }
`

const theme = {
  color: {
    primary: "white",
    secondary: "black",
  },
  backgroundColor: {
    primary: "black",
    secondary: "white",
  },
}

console.log(theme)

const Button = styled.button`
  height: 40px;
  padding: 0 18px;
  cursor: pointer;
  ${({ styleType }) =>
    styleType &&
    css`
      background-color: ${({ styleType }) => theme.backgroundColor[styleType]};
      color: ${({ styleType }) => theme.color[styleType]};
    `};
  border: none;
`

const ProjectBody = styled.div`
  background-color: blue;
  height: 30vh;
  margin: 0 auto;
`

const Page = () => {
  return (
    <>
      <HeroMain>
        <section>
          <h1>
            I make your <span>dreams</span>, I mean, ideas come true
          </h1>
        </section>
      </HeroMain>
      <BodyContainer>
        <ProjectBody>
          <div className="cards"></div>
          <div className="seeAllProjects">
            <Button styleType="primary">See all projects</Button>
          </div>
        </ProjectBody>
      </BodyContainer>
    </>
  )
}

export default Page
