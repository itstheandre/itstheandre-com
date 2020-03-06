import React from "react"
import { Navbar } from "../../styles/S_Layout"
import { useNav } from "../../lib/useNav"
import { useWrapper } from "../../Context/WrapperContext"

const NavbarComp = ({
  menuImage,
  inView,
  footerView,
  navOpen,
  toggleNav,
  safeOption,
  hello,
  textView,
}) => {
  console.log(hello)
  return (
    <Navbar
      navOpen={navOpen}
      inView={inView}
      footerView={footerView}
      safeOption={safeOption}
      textView={textView}
    >
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

export default NavbarComp
