/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import GlobalStyle from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/testing">Testing</Link>
        </li>
      </ul>{" "}
      <div className="test">TT-INTERPHASE MONO</div>
      <h1 className="testH1">ROBOTO?</h1>
      <p className="testH1">Roboto</p>
      {children}
    </>
  )
}

export default Layout
