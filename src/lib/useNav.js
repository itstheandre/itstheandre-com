import { useEffect, useReducer } from "react"
import {
  menuBarsBlack,
  menuBarsWhite,
  xBlack,
  xWhite,
} from "../utils/imageUpload"
import { useWrapper } from "../Context/WrapperContext"
import { useState } from "react"

function layoutReducer(state, action) {
  switch (action.type) {
    case "SET_OPEN_CLOSE":
      const navOpen = !state.navOpen
      return { ...state, navOpen }
    default:
      return { ...state }
  }
}
/* -------------------------------------------------------------------------- */

function rightMenu({ navOpen }, inView) {
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

const initialState = {
  navOpen: false,
}

export function useNav() {
  // const [state, dispatch] = useReducer(layoutReducer, initialState)

  const [navOpen, setNavOpen] = useState(false)
  function dispatch() {
    setNavOpen(!navOpen)
  }
  function toggleNav() {
    setNavOpen(!navOpen)
  }

  const state = { navOpen }

  const { inView } = useWrapper()

  // useEffect(() => {
  //   console.log("inView changed")
  //   if (inView) {
  //     dispatch({ type: "SET_HORIZONTAL" })
  //   } else {
  //     dispatch({ type: "SET_VERTICAL" })
  //   }
  // }, [inView])

  const menuImage = rightMenu(state, !inView)

  // console.log({ state })
  return { dispatch, state, menuImage, inView, navOpen, toggleNav }
}
