import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { AboutPage } from "../styles/S_Layout"
import { Button } from "../styles/Buttons"
import { useWrapper } from "../Context/WrapperContext"
import ContactForm from "../components/HomePage/ContactForm"
import ExperienceComponent from "../components/AboutPage/ExperienceComponent"
import TechnologyList from "../components/AboutPage/TechnologyList"

const About = ({ data }) => {
  const { ref, textChange } = useWrapper()
  // console.log(data)

  console.log(data)

  function retrieveType(data, string) {
    return data.allSanityExperience.edges
      .filter(({ node }) => node.xpType.includes(string))
      .map(({ node }) => node)
  }

  const education = retrieveType(data, "Education")
  const jobs = retrieveType(data, "Job")

  console.log(jobs)

  const allSkills = data.allSanitySkills.edges.map(({ node }) => node)

  const allCategories = [...new Set(allSkills.map(el => el.category).flat())]
    .filter(el => el !== "Javascript")
    .sort()

  const onlinePart = (
    <section className="onlineCourses">
      <div className="titleForSection">
        <h1>Online Courses</h1>
      </div>
    </section>
  )
  // console.log(allSkills)
  return (
    <Layout>
      <AboutPage>
        <div className="hero">
          <header ref={textChange}>
            <h1>My name is André and I'm a full stack developer</h1>
            <p className="aboutDescription">
              After having a proven track record as a project and business
              developer with 25+ startups and leading projects with designers,
              developers and sales people on multiple countries, stages and
              industries, I am now looking for a full-stack developer role.
            </p>
            <a
              href="https://drive.google.com/file/d/1xFqckdAovHSbNPjV2lP3woBwAHm1G6UW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button styleType="secondary">Check my CV</Button>
            </a>
            <div className="fw" ref={ref} />
          </header>
        </div>
        <div className="pastJobs">
          <div className="titleForSection">
            <p>Experience</p>
            <h1>What brought me here</h1>
          </div>
          <div className="listing">
            {jobs.map((job, i) => (
              <ExperienceComponent key={i} job={job} index={i} />
            ))}
          </div>
        </div>

        <div className="educationBody">
          <div className="education">
            <div className="titleForSection">
              <p>Education</p>
              <h1>My formal education</h1>
            </div>
            <div className="eduSection">
              {education.map((student, i) => (
                <ExperienceComponent key={i} job={student} index={i} />
              ))}
            </div>
            <div className="fw" />
          </div>
        </div>
        <div className="skills">
          <div className="titleForSection">
            <p>Skills</p>
            <h1>Technologies</h1>
          </div>

          <div className="skillList">
            {allCategories.map((el, i) => (
              <TechnologyList key={i} skills={allSkills} skillName={el} />
            ))}
          </div>
        </div>
      </AboutPage>
      <ContactForm />
    </Layout>
  )
}

export default About

export const query = graphql`
  query ALL_EXPERIENCES {
    allSanitySkills {
      edges {
        node {
          name
          category
        }
      }
    }
    allSanityExperience(sort: { fields: toOrder, order: DESC }) {
      edges {
        node {
          jobTitle
          description
          toOrder
          xpType
          endDate(formatString: "MMM YYYY")
          startingDate(formatString: "MMM YYYY")
          title
          company {
            location
            name
            website
          }
        }
      }
    }
  }
`
