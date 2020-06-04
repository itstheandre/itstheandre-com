import { useState } from "react"
import { useEffect } from "react"

export function useDisplay() {
  const [display, setDisplay] = useState("desktop")

  useEffect(() => {
    function displaySize() {
      const screen = window.innerWidth
      if (screen >= 960) {
        return "desktop"
      }
      if (screen < 960 && screen > 600) {
        return "tablet"
      }
      // screen <= 600
      return "mobile"
    }
    const displayOfUser = displaySize()
    setDisplay(displayOfUser)
  }, [])

  useEffect(() => {
    function changeDisplay() {
      const screen = window.innerWidth
      if (screen >= 960) {
        return setDisplay("desktop")
      }
      if (screen < 960 && screen > 600) {
        return setDisplay("tablet")
      }
      // screen <= 600

      return setDisplay("mobile")
    }

    window.addEventListener("resize", changeDisplay)
    return () => window.removeEventListener("resize", changeDisplay)
  }, [display])

  console.log(display)

  return { display }
}

// useEffect(() => {
//   function checkAndAutoHide() {
//     const screen = window.innerWidth
//     if (displayMobile && screen > 768) {
//       setDisplayMobile(false)
//     }
//   }
//   window.addEventListener("resize", checkAndAutoHide)

//   return () => window.removeEventListener("resize", checkAndAutoHide)
// }, [displayMobile])
