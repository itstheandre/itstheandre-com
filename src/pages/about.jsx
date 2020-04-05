import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Layout from "../components/layout"
import { AboutPage } from "../styles/S_Layout"
import { ProjectSection } from "../styles/S_Projects"
import { Button } from "../styles/Buttons"
import { useWrapper } from "../Context/WrapperContext"
import ContactForm from "../components/HomePage/ContactForm"
import ExperienceComponent from "../components/AboutPage/ExperienceComponent"
import TechnologyList from "../components/AboutPage/TechnologyList"

const About = ({ data }) => {
  const { ref, textChange } = useWrapper()
  // console.log(data)

  const allSkills = data.skills.edges.map(({ node }) => node)

  const allCategories = [...new Set(allSkills.map(el => el.category).flat())]
    .filter(el => el !== "Javascript")
    .sort()

  // console.log(allSkills)
  return (
    <section>
      <Layout>
        <AboutPage page={"/about"}>
          <header className="fwWrapper aboutPage" ref={textChange}>
            <h1 className="heroText">
              My name is André and I'm a full stack developer
            </h1>
            <p className="aboutDescription">
              After having a proven track record as a project and business
              developer with 25+ startups and leading projects with designers,
              developers and sales people on multiple countries, stages and
              industries, I am now looking for a full-stack developer role.
            </p>

            <a>
              <Button styleType="secondary">Check my CV</Button>
            </a>

            <div className="fw" ref={ref}></div>
          </header>
          <main className="otherSections">
            <section className="pastJobs">
              <div className="titleForSection">
                <p>Experience</p>
                <h1>What brought me here</h1>
              </div>
              <div className="listing">
                {data.jobs.edges.map(({ node: job }, i) => (
                  <ExperienceComponent key={i} job={job} index={i} />
                ))}
              </div>
            </section>
            <div className="others">
              <div className="fullWidthComp" />

              <section className="education">
                <div className="titleForSection">
                  <p>Education</p>
                  <h1>My formal education</h1>
                </div>
                <div className="eduSection">
                  {/* <EducationComponent key={i} education={education} /> */}
                  {data.education.edges.map(({ node: education }, i) => (
                    <ExperienceComponent key={i} job={education} index={i} />
                  ))}
                </div>
              </section>
              {/* <section className="onlineCourses">
                <div className="titleForSection">
                  <h1>Online Courses</h1>
                </div>
              </section> */}
            </div>
            <section className="skills">
              <div className="titleForSection">
                <p>Skills</p>
                <h1>Technologies</h1>
              </div>
              <div className="skillList">
                {allCategories.map((el, i) => (
                  <TechnologyList key={i} skills={allSkills} skillName={el} />
                ))}
              </div>
            </section>
          </main>
          <ContactForm />
        </AboutPage>
      </Layout>
    </section>
  )
}

export default About

export const query = graphql`
  query ALL_EXPERIENCES {
    skills: allSanitySkills {
      edges {
        node {
          name
          category
        }
      }
    }
    jobs: allSanityExperience(
      filter: { xpType: { eq: "Job" } }
      sort: { fields: toOrder, order: DESC }
    ) {
      edges {
        node {
          jobTitle
          description
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
    education: allSanityExperience(
      filter: { xpType: { eq: "Education" } }
      sort: { fields: toOrder, order: DESC }
    ) {
      edges {
        node {
          jobTitle
          description
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
