import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Header } from "../styles/S_Layout"
import { Button } from "../styles/Buttons"
import { useWrapper } from "../Context/WrapperContext"

const Page = styled.main`
  width: 100%;
  /* background-color: red; */

  main {
    /* padding-top: 15vh; */
  }

  header {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .fw {
    width: 100vw;
    pointer-events: none;

    height: 100%;
    /* padding-bottom: 50%; */
    background-color: black;
    position: absolute;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    z-index: -100;
  }
  /* position: relative; */

  /* .fwWrapper {
    position: relative;
    background-color: orange;
    height: 100vh;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
  .fw {
    position: absolute;
    background-color: yellow;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`

const Index = () => {
  const { ref } = useWrapper()
  return (
    <div>
      <Layout>
        <Page>
          <main>
            <header className="fwWrapper">
              <h1 className="heroText">
                I make your <span>dreams</span>, I mean, ideas come true
              </h1>
              <div className="fw" ref={ref}></div>
            </header>
            {/* <Header color="black" /> */}
            <div className="sectionText">Test Test Test</div>
            <div
              style={{
                margin: "0 auto",
                width: "100%",
                height: "20vh",
                backgroundColor: "blue",
              }}
            >
              <Button styleType="primary">Hi there</Button>
            </div>
            <Header color="orange" />
            <Header color="red" />
          </main>
        </Page>
      </Layout>
    </div>
  )
}

export default Index
