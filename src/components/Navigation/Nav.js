import React from "react"
import { Navbar } from "../../styles/S_Layout"
import { useNav } from "../../lib/useNav"
import { useWrapper } from "../../Context/WrapperContext"
import NavbarComp from "./NavbarComp"

const Nav = ({ menuImage, inView, footerView, navOpen, toggleNav }) => {
  const { safeOption } = useWrapper()
  console.log({ safeOption }, "nav")
  console.log({ inView }, "nav")
  return (
    <>
      {safeOption ? (
        <NavbarComp
          navOpen={navOpen}
          inView={safeOption}
          footerView={footerView}
          menuImage={menuImage}
          toggleNav={toggleNav}
        />
      ) : (
        <NavbarComp
          navOpen={navOpen}
          inView={!inView}
          footerView={footerView}
          menuImage={menuImage}
          toggleNav={toggleNav}
        />
      )}
    </>
  )
}

export default Nav
