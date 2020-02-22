import React from "react"
import LayoutTest from "../components/layout3"
import styled from "styled-components"
import { Header } from "../styles/S_Layout"
import { Button } from "../styles/Buttons"

const Page3 = () => {
  return (
    <div>
      <LayoutTest>
        <Header color="black" />
        <div className="sectionText">Test Test Test</div>
        <div
          style={{
            margin: "0 auto",
            width: "80vw",
            height: "20vh",
            backgroundColor: "blue",
          }}
        >
          <Button styleType="primary">Hi there</Button>
        </div>
        <Header color="orange" />
        <Header color="red" />
      </LayoutTest>
    </div>
  )
}

export default Page3
