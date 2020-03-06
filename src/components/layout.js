import React from "react"
import Sidebar from "./Navigation/Sidebar"
import Nav from "./Navigation/Nav"
import GlobalStyle from "../styles/GlobalStyles"
import { LayoutBody, BodyContainer, Footer, Spacer } from "../styles/S_Layout"
import { useNav } from "../lib/useNav"
import { useWrapper } from "../Context/WrapperContext"
import {
  twitterLogo,
  instagramLogo,
  linkedinLogo,
  gitHubLogo,
} from "../utils/imageUpload"

const logos = [
  { image: twitterLogo, link: "https://twitter.com/itstheandre" },
  { image: instagramLogo, link: "https>//instagram.com/itstheandre_" },
  { image: linkedinLogo, link: "https://linkedin.com/in/itstheandre" },
  { image: gitHubLogo, link: "https://github.com/itstheandre" },
]

const Layout = ({ children }) => {
  const { menuImage, inView, navOpen, toggleNav, footerView } = useNav()

  const { safeOption } = useWrapper()

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
      {/* </div> */}
      <Spacer>
        <LayoutBody navOpen={navOpen} safeOption={safeOption}>
          <div className="overlay" onClick={toggleNav}></div>
          <BodyContainer>{children}</BodyContainer>
        </LayoutBody>
        <Footer navOpen={navOpen} logos={logos.length}>
          <div className="footerWrapper">
            <div className="icons">
              {logos.map(icon => (
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.link}
                >
                  <img src={icon.image} key={icon.link} />
                </a>
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
