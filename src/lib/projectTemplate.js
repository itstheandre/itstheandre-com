import ReactMarkdown from "react-markdown"
import React from "react"
import { Tags } from "../styles/Buttons"

export function fillTemplate(node) {
  console.log({ node })
  const projectScreenshots = node.projectScreenshots
  const client = node.client
  const team = node.team
  const Parsing = node.text.split("---")

  const text = Parsing.map(el => {
    if (el.includes("#")) {
      return <ReactMarkdown source={el} key={el} />
    } else {
      return (
        <div className="examples" key={el}>
          {projectScreenshots.map(image => (
            <img src={image.asset.fluid.src} key={image.asset.id} />
          ))}
        </div>
      )
    }
  })

  const heroImage = node.heroImage.asset.fluid.src

  const length = projectScreenshots.length > 1 ? 2 : 1

  const tags = node.techUsed.map(el => <Tags key={el}>{el}</Tags>)

  // const team = node.
  const { projectType, title, description, link } = node
  return {
    projectType,
    title,
    description,
    link,
    text,
    length,
    heroImage,
    tags,
    client,
    team,
  }
}
