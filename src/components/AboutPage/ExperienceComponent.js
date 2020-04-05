import React from "react"
import ReactMarkdown from "react-markdown"

const ExperienceComponent = ({ job, index }) => {
  return (
    <article>
      <div className="date">
        {job.startingDate} - {!index ? "Present" : job.endDate}
      </div>
      <div className="title">{job.jobTitle}</div>
      <div className="company">
        <a
          href={job.company.website}
          title={`${job.company.name}'s Website`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {job.company.name}
        </a>
        ,{" "}
        {job.company.location.length === 1
          ? job.company.location.map(el => el)
          : job.company.location.join(" & ")}
      </div>
      <div className="description">
        <ReactMarkdown source={job.description} />
      </div>
    </article>
  )
}

export default ExperienceComponent
