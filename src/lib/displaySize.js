import { useState } from "react"
import { useEffect } from "react"

export function useDisplay() {
  const [display, setDisplay] = useState("desktop")

  useEffect(() => {
    function displaySize() {
      const screen = window.innerWidth
      if (screen > 960) {
        setDisplay("desktop")
      } else if (screen < 960 && screen > 600) {
        setDisplay("tablet")
      } else if (screen < 600) {
        setDisplay("mobile")
      }
    }
    window.addEventListener("resize", displaySize)
    return () => window.removeEventListener("resize", displaySize)
  })

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
