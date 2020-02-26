import React, { createContext, useContext, useState } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider

export function WrapperProvider({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "-60px",
  })

  const [ref2, inView2] = useInView({
    /* Optional options */
    rootMargin: "-450px",
  })

  return (
    // <WrapperContextProvider value={{ ref, inView, ref2, inView2 }}>
    <WrapperContextProvider value={{ ref, inView, ref2, inView2 }}>
      <>{children}</>
    </WrapperContextProvider>
  )
}

export function useWrapper() {
  return useContext(WrapperContext)
}
