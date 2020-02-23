import React from "react"
import styled from "styled-components"
import { menuBarsWhite, menuBarsBlack } from "../../utils/imageUpload"
import { Navbar } from "../../styles/S_Layout"

const Nav = ({ verticalNav, navOpen, dispatch }) => {
  console.log("verticalNav, ", verticalNav, "navOpen, ", navOpen)
  //   console.log(state)

  const imageBars = !navOpen ? menuBarsWhite : menuBarsWhite
  return (
    <Navbar navOpen={navOpen} verticalNav={verticalNav}>
      {" "}
      {/* <div className="navWrapper"> */}
      <div className="bars">
        <img
          src={imageBars}
          alt="menu bars"
          onClick={() => dispatch({ type: "SET_OPEN_CLOSE" })}
        />
      </div>
      <div className="h3">
        <p style={{ fontFamily: "Roboto" }}>Hey, it's the André here</p>
      </div>
      <div className="empty"></div>
      {/* </div> */}
    </Navbar>
  )
}

export default Nav
