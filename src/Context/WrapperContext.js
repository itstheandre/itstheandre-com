import React, { createContext, useContext, useState } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider

export function WrapperProvider({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "-60px",
  })

  const [footer, footerView] = useInView({
    /* Optional options */
    rootMargin: "-450px",
  })

  return (
    <WrapperContextProvider value={{ ref, inView, footer, footerView }}>
      <>{children}</>
    </WrapperContextProvider>
  )
}

//

export function useWrapper() {
  return useContext(WrapperContext)
}
