import styled from "styled-components"

const ProjectSection = styled.section`
  margin-bottom: 16rem;

  .grid {
    margin: 0 0 4.8rem;
    background: blue;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(29.6rem, 1fr));
    grid-gap: 2.4rem;
  }

  .seeAllProjects {
    display: flex;
    justify-content: center;
  }
`

const ProjectGrid = styled.section`
  margin: 0 0 4.8rem;
  background: blue;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29.6rem, 1fr));
  grid-gap: 2.4rem;
`

const ProjectStyled = styled.div`
  padding-bottom: 83%;
  background: green;
  position: relative;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: green;
  :hover {
    /* background-color: yellow; */
    .imageOverlay {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .sectionText {
      margin-bottom: 0;
    }

    .content {
      /* height: 30%; */
      padding-top: 3.2rem;
      height: 40%;
      padding-bottom: 4.2rem;
    }

    .tags {
      transform: translateY(-30%);
    }
  }

  .imageOverlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  .tags {
    width: 100%;
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    align-items: flex-start;
    margin: 0 2.4rem;
    padding-bottom: 3.2rem;
    color: white;
    transition: 0.5s ease;

    .sectionText {
      margin-bottom: 1.2rem;
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 0;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2.4rem;
    color: white;
    font-size: 1.6rem;
    display: flex;
    justify-content: flex-start;
  }
`

export { ProjectGrid, ProjectStyled, ProjectSection }
