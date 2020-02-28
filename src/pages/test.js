import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import {
  casaDePapel,
  arrowLeft,
  arrowRight,
  guard,
  thief,
} from "../utils/imageUpload"
import { Tags, Button } from "../styles/Buttons"
import { ProjectTemplate } from "../styles/S_Projects"

const thanks = [
  `To the people that helped this game be live right now - the
Ironhack teaching staff - Montasar, Svenja, Bruno, Min, and
Pierre - the colleagues that gave me a hand either by
brainstorming, or providing feedback, Catarina Rosa, for
designing the levels and the characters and for Tonnyy * for
letting me use the 8bit track in the game.`,
]

const Project = () => {
  // const images = [thief, guard, thief, guard]
  const images = [thief, guard]
  // const images = [casaDePapel]

  const length = images.length > 1 ? 2 : 1

  return (
    <Layout>
      <ProjectTemplate img={casaDePapel} length={length}>
        <div className="hero">
          <div className="fw" />
        </div>
        <div className="content">
          <div className="tags">
            <div className="sectionText">Technologies</div>
            <div className="allTags">
              <Tags>Javascript</Tags>
              <Tags>HTML</Tags>
              <Tags>P5.js</Tags>
              <Tags>P5.js</Tags>
              <Tags>P5.js</Tags>
              <Tags>P5.js</Tags>
              <Tags>P5.js</Tags>
              <Tags>P5.js</Tags>
            </div>
          </div>
          <div className="description">
            <div className="sectionText">Game</div>
            <div className="h2">Casa de los bytes</div>
            <div className="shortDescription">
              <p>
                Inspired by Netflix show 'Casa de Papel' and other games from my
                youth, Casa de los byts is a maze game. The goal of the game is
                to go from the basement to the roof without getting caught by
                the security guards.
              </p>
              <p>
                If you've ever seen or played the former GameBoy or GameBoy
                Advance Pokemon games, then you will be able to fit right in.
                The basement was based out of a cave I remember playing. Not the
                exact cave, because I can't remember which one it is, but the
                idea is that you have multiple ways of going through each level
                without getting caught - but each one is harder and, therefore,
                riskier than the other.
              </p>
              <Button>Take me there</Button>
              <div className="text">
                <p>
                  First steps of the game was to initially design the maze in
                  paper. Coming from a 10x10 grid, and then figure out different
                  ways to go through each level, thinking of walls and
                  obstacles:
                </p>
                <h4>Grid</h4>
                <p>
                  Each level is a nested array with 10 other arrays in themn. 0s
                  represent "walkable" space, whilst 1s represent walls. The 2
                  is supposed to trigger a new level. After this grid is
                  written, there has to be way to render it according to the
                  level, so the grid is drawn everytime always depending on the
                  level and, therefore, it's position in the array.
                </p>
                <h4>Player</h4>{" "}
                <p>
                  The player is built with 2 properties - it's position in the
                  row and column. The player does not have a huge amount of
                  functions: mostly movement functions that define how it moves,
                  where it can move, and what happens when it either is seen by
                  a guard, or reaches a stair (2s in the grid). Reaching the
                  stairs triggers a new level, getting caught, ends the game and
                  forces you to start over.
                </p>
                <h4>Guards</h4>
                <p>
                  The guards are the real trouble makers in this game. There are
                  guards on every level, each of them with its own properties.
                  So the idea was to first create a guard Class and from that
                  point on figure out movements, rotations, sizes, etc. The
                  guards have a different "size". Originally they were thought
                  with the same size of the player - 100x100, but then I would
                  have to figure out how to get a "field of view" to them.
                  Creating a guard with a light already in the image turned out
                  to be the easiest, most sensible solution for the time
                  restraint. Here, it is important to define this Object's
                  dimensions, and it's action area, because it's important for
                  whoever is playing the game to immediately know where the
                  thief can go without getting caught.
                </p>
                <div className="examples">
                  {images.map(el => (
                    <img src={el} />
                  ))}
                </div>
                {thanks.length ? (
                  <div className="thanks">
                    <h4>Thanks</h4>
                    {thanks.map(el => (
                      <p>{el}</p>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="anotherDiv">
          <div className="arrow">
            <img src={arrowLeft} alt="Previous Content" />
          </div>
          <div className="directions">
            Previous
            {/* <div className="h2">
            </div> */}
          </div>
          <div className="empty"></div>
          <div className="directions">
            Next
            {/* <div className="h2">
            </div> */}
          </div>
          <div className="arrow">
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </ProjectTemplate>
    </Layout>
  )
}

export default Project
