import React from "react"
import Sidebar from "./Navigation/Sidebar"
import Nav from "./Navigation/Nav"
import GlobalStyle from "../styles/GlobalStyles"
import { LayoutBody, BodyContainer, Footer, Spacer } from "../styles/S_Layout"
import { useNav } from "../lib/useNav"
import { useWrapper } from "../Context/WrapperContext"
import { twitterLogo, instagramLogo, linkedinLogo } from "../utils/imageUpload"

const logos = [twitterLogo, instagramLogo, linkedinLogo]

const Layout = ({ children }) => {
  const { menuImage, inView, navOpen, toggleNav, footerView } = useNav()

  const { safeOption } = useWrapper()

  return (
    <>
      <GlobalStyle />
      <Sidebar navOpen={navOpen} />
      {/* <Spacer>
        <div> */}
      <Nav
        navOpen={navOpen}
        menuImage={menuImage}
        inView={inView}
        toggleNav={toggleNav}
        footerView={footerView}
      />
      {/* </div> */}
      <Spacer>
        <LayoutBody navOpen={navOpen} safeOption={safeOption}>
          <div className="overlay" onClick={toggleNav}></div>
          <BodyContainer>{children}</BodyContainer>
        </LayoutBody>
        <Footer navOpen={navOpen}>
          <div className="footerWrapper">
            <div className="icons">
              {logos.map(image => (
                <img src={image} key={image} />
              ))}
            </div>
            <div className="copyright">
              © 2020 Catarina Rosa & André de Albuquerque
            </div>
          </div>
        </Footer>
      </Spacer>
    </>
  )
}

export default Layout
