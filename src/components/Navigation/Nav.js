import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  width: 25vw;
  height: 100vh;
  background: #020a17;
  padding: 1rem;
  z-index: 1500;
  overflow: hidden;
  transition: transform 600ms;
  transform: ${({ navOpen }) => (navOpen ? "" : "translateX(-25vw)")};
`

const Nav = ({ navOpen }) => {
  console.log(navOpen)
  return (
    <StyledNav navOpen={navOpen} className="sidebar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <a href="https://www.pioneersshow.com" className="nav-link">
            Podcast
          </a>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
