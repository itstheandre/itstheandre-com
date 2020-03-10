import React from "react"
import { Link } from "gatsby"
import { SideNav } from "../../styles/S_Layout"

const Sidebar = ({ navOpen }) => {
  return (
    <SideNav navOpen={navOpen} className="sidebar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Homepage
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Me
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        {/* <li className="nav-item">
          <a href="https://www.pioneersshow.com" className="nav-link">
            Podcast
          </a>
        </li> */}
        {/* <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li> */}
      </ul>
      <div className="icons"></div>
    </SideNav>
  )
}

export default Sidebar
