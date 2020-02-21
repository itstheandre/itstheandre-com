import React from "react"
import styled from "styled-components"
import { menuBarsWhite, menuBarsBlack } from "../../utils/imageUpload"
import { Navbar } from "../../styles/S_Layout"

const Nav = ({ verticalNav, navOpen, dispatch }) => {
  console.log(verticalNav)
  //   console.log(state)

  const imageBars = !navOpen ? menuBarsWhite : menuBarsBlack
  return (
    <Navbar navOpen={navOpen} verticalNav={verticalNav}>
      {" "}
      <div className="bars">
        <img
          src={imageBars}
          alt="menu bars"
          onClick={() => dispatch({ type: "SET_OPEN_CLOSE" })}
        />
      </div>
      <div className="h3">Hey, it's the André here</div>
      <div className="empty"></div>
    </Navbar>
  )
}

export default Nav
