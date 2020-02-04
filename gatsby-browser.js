import React from "react"
import { WrapperProvider } from "./src/Context/WrapperContext"
import "./static/fonts.css"

export const wrapRootElement = ({ element }) => (
  <WrapperProvider>{element}</WrapperProvider>
)
