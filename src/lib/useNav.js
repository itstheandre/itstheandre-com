import {
  menuBarsBlack,
  menuBarsWhite,
  xBlack,
  xWhite,
} from "../utils/imageUpload"
import { useWrapper } from "../Context/WrapperContext"
import { useState } from "react"

/* -------------------------------------------------------------------------- */

function rightMenu(navOpen, safeOption, inView) {
  if (navOpen && window.innerWidth < 600) return xWhite
  if (!navOpen && safeOption) return menuBarsBlack
  else if (navOpen && safeOption) return xBlack
  else if (navOpen && inView) {
    return xBlack
  } else if (navOpen && !inView) {
    return xWhite
  } else if ((!navOpen && inView) || safeOption) {
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

  const { inView, footerView, safeOption } = useWrapper()

  const menuImage = rightMenu(navOpen, safeOption, !inView)

  return {
    menuImage,
    inView,
    navOpen,
    toggleNav,
    footerView,
  }
}
