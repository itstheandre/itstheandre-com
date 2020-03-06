import React, { createContext, useContext, useState } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider

export function WrapperProvider({ children }) {
  const val = "-400px"
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: `-60px`,
  })

  const [textChange, textView] = useInView({ rootMargin: `${val}` })

  const [footer, footerView] = useInView({
    /* Optional options */
    rootMargin: "-450px",
  })

  const [safeOption, setSafeOption] = useState(undefined)

  function safeOptionToggle(arg) {
    setSafeOption(arg)
  }

  // console.log({ safeOption, footerView })

  return (
    <WrapperContextProvider
      value={{
        ref,
        inView,
        footer,
        footerView,
        safeOption,
        safeOptionToggle,
        textChange,
        textView,
      }}
    >
      <>{children}</>
    </WrapperContextProvider>
  )
}

//

export function useWrapper() {
  return useContext(WrapperContext)
}
