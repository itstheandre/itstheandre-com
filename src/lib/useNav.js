import { useEffect, useReducer } from "react"

function layoutReducer(state, action) {
  let verticalNav
  switch (action.type) {
    case "SET_VERTICAL":
      // const verticalNav = true
      verticalNav = true
      return { ...state, verticalNav }
    case "SET_HORIZONTAL":
      // const verticalNav = true
      verticalNav = false
      return { ...state, verticalNav }
    case "SET_OPEN_CLOSE":
      const navOpen = !state.navOpen
      return { ...state, navOpen }
    default:
      return { ...state }
  }
}
/* -------------------------------------------------------------------------- */

const initialState = {
  navOpen: false,
  verticalNav: false,
}

export function useNav() {
  const [state, dispatch] = useReducer(layoutReducer, initialState)

  useEffect(() => {
    function handleScroll() {
      let yVal = window.scrollY
      if (yVal < 500) {
        dispatch({ type: "SET_HORIZONTAL" })
      } else {
        dispatch({ type: "SET_VERTICAL" })
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // console.log({ state })
  return { dispatch, state }
}
