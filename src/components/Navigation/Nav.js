import React from "react"
import { Navbar } from "../../styles/S_Layout"
import { useNav } from "../../lib/useNav"
import { useWrapper } from "../../Context/WrapperContext"
import NavbarComp from "./NavbarComp"

const Nav = ({ menuImage, inView, footerView, navOpen, toggleNav }) => {
  const { safeOption } = useWrapper()
  // console.log({ safeOption }, "nav")
  // console.log({ inView }, "nav")
  // console.log({ inView, safeOption, footerView })
  console.log(
    { safeOption: Boolean(safeOption) },
    { footerView: Boolean(footerView) }
  )
  return (
    <>
      {safeOption && !footerView ? (
        <NavbarComp
          navOpen={navOpen}
          inView={safeOption}
          footerView={footerView}
          menuImage={menuImage}
          toggleNav={toggleNav}
          // safeOption={safeOption}
        />
      ) : (
        <NavbarComp
          navOpen={navOpen}
          inView={!inView}
          footerView={footerView}
          menuImage={menuImage}
          toggleNav={toggleNav}
          safeOption={safeOption}
        />
      )}
    </>
  )
}

export default Nav
