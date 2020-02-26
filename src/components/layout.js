import React from "react"
import Sidebar from "./Navigation/Sidebar"
import Nav from "./Navigation/Nav"
import GlobalStyle from "../styles/GlobalStyles"
import { LayoutBody, BodyContainer, Footer } from "../styles/S_Layout"
import { useNav } from "../lib/useNav"
import { useWrapper } from "../Context/WrapperContext"
import { twitterLogo, instagramLogo, linkedinLogo } from "../utils/imageUpload"

const logos = [twitterLogo, instagramLogo, linkedinLogo]

const Layout = ({ children }) => {
  const { menuImage, inView, navOpen, toggleNav, footerView } = useNav()

  return (
    <>
      <GlobalStyle />
      <Sidebar navOpen={navOpen} />
      <Nav
        navOpen={navOpen}
        menuImage={menuImage}
        inView={inView}
        toggleNav={toggleNav}
        footerView={footerView}
      />
      <LayoutBody navOpen={navOpen}>
        <div className="overlay" onClick={toggleNav}></div>
        <BodyContainer>{children}</BodyContainer>
        <Footer>
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
      </LayoutBody>
    </>
  )
}

export default Layout
