import styled from "styled-components"

const ProjectPageSection = styled.section`
  margin-bottom: 16rem;
  @media (max-width: 936px) {
    margin-bottom: 8rem;
  }
  .grid {
    margin: 0 0 4.8rem;
    /* background: blue; */
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: 2.4rem;
    @media (min-width: 1480px) {
      /* grid-template-columns: repeat(2, 1fr); */
      grid-template-columns: repeat(auto-fit, minmax(29.6, 1fr));
    }
    @media (max-width: 936px) {
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
      grid-gap: 1.6rem;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .seeAllProjects {
    display: flex;
    justify-content: center;
  }
`

const ProjectSection = styled(ProjectPageSection)`
  @media (max-width: 936px) {
    margin-bottom: 16rem;

    .grid {
      a {
        :last-child {
          display: none;
        }
        /* &:nth-last-child(-n + 2) {
          display: none;
        } */
      }
    }
  }
  /* .grid {
    a {
      &:nth-last-child(-n + 2) {
        display: none;
      }
    }
  } */
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

  .alwaysOverlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

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
    @media (max-width: 936px) {
      .imageOverlay {
        height: 0;
        background-color: rgba(0, 0, 0, 0.8);
      }

      .sectionText {
        margin-bottom: 0;
      }

      .content {
        /* height: 30%; */
        padding-top: 0;
        height: 0;
        padding-bottom: 0;
      }

      .tags {
        transform: translateY(0);
      }
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
    position: relative;
    width: 100%;
    margin-bottom: 8rem;

    .fw {
      width: 100vw;
      position: absolute;
      background-attachment: fixed;

      background-size: cover;
      height: 100%;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
    }
  }

  .content {
    /* margin: 0 8rem 16rem; */
    margin: 0 0 16rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: "content tags";
    grid-gap: 3.4rem;

    @media (max-width: 936px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "content"
        "tags";
      margin: 0 4rem 16rem;
    }
    @media (max-width: 600px) {
      margin: 0 0 8rem;
    }

    .tags {
      grid-area: tags;
      font-family: var(--tt-mono);

      .sectionText {
        margin-bottom: 1.2rem;
      }

      .allTags {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 8rem;
        /* gap: 1.2rem;
        grid-gap: 1.2rem; */
        div {
          margin-right: 1.2rem;
          margin-bottom: 1.2rem;
        }
        @media (max-width: 936px) {
          margin-bottom: 4.8rem;
        }
      }

      .client {
        text-transform: uppercase;
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
        font-family: var(--robotoFont);
        margin-bottom: 1.2rem;
      }

      .clientName {
        font-size: 1.6rem;
        font-family: var(--robotoFont);
        font-weight: regular;
        margin-bottom: 8rem;
        @media (max-width: 936px) {
          margin-bottom: 4.8rem;
        }
      }

      .team {
        margin-bottom: 2.4rem;
      }

      .teamMembers {
        font-size: 1.6rem;
        line-height: 3.2rem;
        a {
          border-bottom: 0.5px solid black;
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
        font-family: var(--tt-mono);
      }

      .shortDescription {
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin-bottom: 4.8rem;

        a {
          color: black;
          border-bottom: 0.5px solid black;
        }

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

        a {
          color: black;
          border-bottom: 0.5px solid black;
        }
      }
      .examples {
        display: grid;
        grid-template-columns: repeat(${({ length }) => length}, 1fr);
        /* grid-template-columns: repeat(2, 1fr); */
        margin: 4.8rem 0;
        grid-gap: 1rem;
        width: 100%;
        /* min-height: 15rem; */
        img {
          width: 100%;
          /* height: auto; */
        }
      }
      .thanks {
        h4 {
          font-weight: bold;
          font-size: 1.6rem;
          font-family: var(--robotoFont);
        }

        a {
          color: black;
          border-bottom: 0.5px solid black;
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

  .prevNext {
    width: 100%;
    /* display: grid; */
    /* grid-template-columns: auto auto 1fr auto auto; */
    /* grid-gap: 3.2rem; */
    /* display: flex; */
    display: ${({ after, previous }) => {
      if (previous && after) return "grid"
      else return "flex"
    }};
    grid-template-columns: ${({ after, previous }) => {
      if (previous && after) return "auto auto 1fr auto auto"
      else return ""
    }};
    gap: 3.2rem;
    justify-content: ${({ previous, after }) => {
      if (previous && after) return ""
      else if (previous && !after) return "start"
      else if (!previous && after) return "end"
    }};

    @media (max-width: 600px) {
      display: flex;
      grid-template-columns: "";
      justify-content: space-between;
    }

    .directions {
      align-self: center;
      cursor: pointer;
      font-size: 2.8rem;
      font-family: var(--tt-mono);
      @media (max-width: 600px) {
        display: none;
      }
    }

    .arrow {
      cursor: pointer;
    }
  }
`

export {
  ProjectGrid,
  ProjectStyled,
  ProjectSection,
  ProjectTemplate,
  ProjectPageSection,
}
