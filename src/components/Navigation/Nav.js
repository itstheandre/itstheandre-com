import React from "react"
import { Navbar } from "../../styles/S_Layout"

const Nav = ({ menuImage, inView, inView2, navOpen, toggleNav }) => {
  return (
    <Navbar navOpen={navOpen} inView={!inView} footerView={inView2}>
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
