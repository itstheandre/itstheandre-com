import React from "react"
import styled from "styled-components"
import { menuBarsWhite, menuBarsBlack } from "../../utils/imageUpload"
import { Navbar } from "../../styles/S_Layout"
import { useNav } from "../../lib/useNav"
import { useWrapper } from "../../Context/WrapperContext"

const Nav = ({ navOpen, menuImage, inView, toggleNav }) => {
  return (
    <Navbar navOpen={navOpen} inView={!inView}>
      <div className="bars">
        <img src={menuImage} alt="menu bars" onClick={toggleNav} />
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
