import styled from "styled-components"

const ProjectSection = styled.section`
  /* margin-bottom: 16rem; */

  .grid {
    margin: 0 0 4.8rem;
    /* background: blue; */
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
  /* background: blue; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29.6rem, 1fr));
  grid-gap: 2.4rem;
`

const ProjectStyled = styled.div`
  cursor: pointer;
  padding-bottom: 83%;
  background: green;
  position: relative;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  /* background-color: green; */
  :hover {
    /* background-color: yellow; */
    .imageOverlay {
      height: 100%;
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
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    transition: 0.5s ease;
    background-color: none;
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

const ProjectTemplate = styled.div`
  margin-bottom: 8rem;
  .hero {
    height: 100vh;
    background: blue;
    position: relative;
    width: 100%;
    margin-bottom: 8rem;

    .fw {
      width: 100vw;
      position: absolute;
      background: url(${({ img }) => img}) no-repeat;
      background-size: cover;
      height: 100%;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
    }
  }

  .content {
    margin: 0 8rem 16rem;
    display: grid;
    grid-template-columns: 53.6rem 1fr;
    grid-template-areas: "content tags";
    grid-gap: 2.4rem;

    .tags {
      grid-area: tags;

      .sectionText {
        margin-bottom: 1.2rem;
      }

      .allTags {
        display: flex;
        flex-wrap: wrap;

        div {
          margin-right: 1.2rem;
          margin-top: 1.2rem;
        }
      }
    }

    .description {
      grid-area: content;

      .sectionText {
        margin-bottom: 2.4rem;
      }

      .h2 {
        margin-bottom: 4.8rem;
      }

      .shortDescription {
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin-bottom: 4.8rem;

        p {
          margin-bottom: 3rem;
        }
      }

      button {
        margin-bottom: 4.8rem;
      }

      .text {
        font-size: 1.6rem;
        line-height: 2.4rem;

        p {
          margin-bottom: 3.2rem;
          &:last-child {
            margin-bottom: 0;
          }
        }

        h4 {
          font-weight: bold;
          font-size: 1.6rem;
          font-family: var(--robotoFont);
        }
      }
      .examples {
        display: grid;
        grid-template-columns: repeat(${({ length }) => length}, 1fr);
        /* grid-template-columns: repeat(2, 1fr); */
        margin: 4.8rem 0;
        grid-gap: 1rem;
        width: 100%;
        img {
          width: 100%;
        }
      }
      .thanks {
        h4 {
          font-weight: bold;
          font-size: 1.6rem;
          font-family: var(--robotoFont);
        }

        p {
          margin-bottom: 3.2rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .anotherDiv {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    grid-gap: 3.2rem;

    .directions {
      align-self: center;
      cursor: pointer;
      font-size: 2.8rem;
      font-family: var(--tt-mono);
    }

    .arrow {
      cursor: pointer;
    }
  }
`

export { ProjectGrid, ProjectStyled, ProjectSection, ProjectTemplate }
