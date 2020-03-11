import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title = "André de Albuquerque - Web Developer" }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
  </Helmet>
)

export default Meta
