import {
  menuBarsBlack,
  menuBarsWhite,
  xBlack,
  xWhite,
} from "../utils/imageUpload"
import { useWrapper } from "../Context/WrapperContext"
import { useState } from "react"

/* -------------------------------------------------------------------------- */

function rightMenu(navOpen, inView) {
  if (navOpen && inView) {
    return xBlack
  } else if (navOpen && !inView) {
    return xWhite
  } else if (!navOpen && inView) {
    return menuBarsBlack
  } else if (!navOpen && !inView) {
    return menuBarsWhite
  }
}

export function useNav() {
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(!navOpen)
  }

  const { inView, inView2 } = useWrapper()

  const menuImage = rightMenu(navOpen, !inView)

  // console.log({ state })
  return { menuImage, inView, navOpen, toggleNav, inView2 }
}
