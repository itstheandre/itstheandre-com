import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// export const query = graphql`
//   query {
//     allSanityProject {
//       edges {
//         node {
//           title
//           description
//           slug {
//             current
//           }
//           id
//           body
//           bodyImage {
//             asset {
//               fluid {
//                 src
//                 srcSet
//               }
//             }
//           }
//           heroImage {
//             asset {
//               fluid {
//                 src
//                 srcSet
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const IndexPage = () => {
  // const IndexPage = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
