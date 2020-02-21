import React from "react"
import LayoutTest from "../components/layout3"
import styled from "styled-components"
import { Header } from "../styles/S_Layout"

const Page3 = () => {
  return (
    <div>
      <LayoutTest>
        <Header color="black" />
        <Header color="orange" />
        <Header color="red" />
      </LayoutTest>
    </div>
  )
}

export default Page3
