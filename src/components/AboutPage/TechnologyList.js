import React from "react"

const TechnologyList = ({ skills, skillName }) => {
  //   console.log(skillName)

  const skillChallenge = skills.filter(skill =>
    skill.category.includes(skillName)
  )

  console.log(skillChallenge)
  return (
    <div className="skillListicle">
      <h2>{skillName}</h2>
      <ul>
        {skillChallenge.map((el, i) => (
          <li key={i}>{el.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TechnologyList
