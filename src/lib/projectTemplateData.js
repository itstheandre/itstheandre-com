import React from "react"
import { Tags } from "../styles/Buttons"
import { useEffect } from "react"
import { useWrapper } from "../Context/WrapperContext"
import Img from "gatsby-image"
import BgImg from "gatsby-background-image"

export function useSafe() {
  const { safeOptionToggle } = useWrapper()

  useEffect(() => {
    safeOptionToggle(true)
    return () => {
      safeOptionToggle(false)
    }
  }, [safeOptionToggle])
}

function imageData(display, allImages) {
  switch (display) {
    case "desktop":
      return allImages.heroImage
    // break
    case "tablet":
      return allImages.tabletImage || allImages.heroImage
    // break
    case "mobile":
      return allImages.phoneImage || allImages.heroImage
    // break

    default:
      return
  }
}

function teamCheck(team) {
  const findMe = team.find(el => el.name === "André")
  if (team.length === 0 || (findMe && team.length === 1)) {
    return false
  }
  return true
}

export function fillTemplate(node, display) {
  // console.log(node.title)
  const projectImages = node.projectScreenshots.map(({ asset }) =>
    asset.fluid.src.includes("gif") ? (
      <img
        src={asset.fluid.src}
        key={asset.fluid.src}
        alt={`${node.title}'s Project Sreenshot`}
      />
    ) : (
      <Img
        fluid={asset.fluid}
        key={asset.fluid.src}
        alt={`${node.title}'s Project Sreenshot`}
      />
    )
  )
  const projectScreenshotsArr = node.projectScreenshots
  const client = node.client
  const team = node.team
  const Parsing = node.text.split("---")

  const heroImage = node.heroImage.asset.fluid

  const phoneImage = node?.phoneImage?.asset?.fluid
  const tabletImage = node?.tabletImage?.asset?.fluid

  const imageInfo = imageData(display, { heroImage, phoneImage, tabletImage })

  const heroBackground = (
    <BgImg
      fluid={imageInfo}
      Tag="div"
      className="fw"
      backgroundColor={node.heroBG}
    />
  )

  const teamValid = teamCheck(team)
  // console.log({ teamValid })

  const length = projectScreenshotsArr.length > 1 ? 2 : 1

  const tags = node.techUsed.map(el => <Tags key={el}>{el}</Tags>)

  // const team = node.
  const { projectType, title, description, link } = node
  return {
    projectType,
    title,
    description,
    link,
    length,
    heroImage,
    tags,
    client,
    team,
    Parsing,
    projectScreenshotsArr,
    projectImages,
    heroBackground,
    teamValid,
  }
}
