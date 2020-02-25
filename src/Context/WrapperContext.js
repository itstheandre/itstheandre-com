import React, { createContext, useContext, useState } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider

export function WrapperProvider({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "-60px",
  })

  return (
    <WrapperContextProvider value={{ ref, inView }}>
      <>{children}</>
    </WrapperContextProvider>
  )
}

export function useWrapper() {
  return useContext(WrapperContext)
}
