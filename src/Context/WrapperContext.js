import React, { createContext, useContext } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider

export function WrapperProvider({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "-56px",
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
