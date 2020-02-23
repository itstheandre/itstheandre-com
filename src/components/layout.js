import React from "react"
import Sidebar from "./Navigation/Sidebar"
import Nav from "./Navigation/Nav"
import GlobalStyle from "../styles/GlobalStyles"
import { LayoutBody, BodyContainer } from "../styles/S_Layout"
import { useNav } from "../lib/useNav"

const Layout = ({ children }) => {
  const { dispatch, state } = useNav()

  return (
    <>
      <GlobalStyle />
      <Sidebar navOpen={state.navOpen} />
      <Nav
        verticalNav={state.verticalNav}
        navOpen={state.navOpen}
        state={state}
        dispatch={dispatch}
      />
      <LayoutBody navOpen={state.navOpen}>
        <div
          className="overlay"
          onClick={() => dispatch({ type: "SET_OPEN_CLOSE" })}
        ></div>
        <BodyContainer>{children}</BodyContainer>
      </LayoutBody>
    </>
  )
}

export default Layout
// \
// {
/* <div
          style={{
            height: "70vh",
            backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <button onClick={() => dispatch({ type: "SET_OPEN_CLOSE" })}>
          Click me
        </button> */
// }

//   <button>Click me</button>
//   <h1>{state.navOpen.toString()}</h1>
//   <h2>{state.verticalNav.toString()}</h2>
// </LayoutBody>
// <Things />
