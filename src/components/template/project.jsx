import React from "react"
// import { graphql } from "gatsby"
// import ReactMarkdown from "react-markdown"
import styled from "styled-components"

// export const query = graphql`
//   query($slug: String) {
//     sanityPost(slug: { current: { eq: $slug } }) {
//       title
//       slug {
//         current
//       }
//       body2
//     }
//   }
// `

const PostBody = styled.div`
  .test {
    width: 80vw;

    img {
      height: 100%;
      border: 10px solid black;
    }
    h2 {
      color: green;
    }
    p {
      color: red;
    }
    .Test3 {
      background: yellow;
    }
  }
`

// const Project = ({ data }) => {
const Project = () => {
  // console.log(data)
  // const postContent = data.sanityPost.body2

  return (
    <PostBody>
      {/* <ReactMarkdown source={postContent} /> */}
      {/* <ReactMarkdown source={postContent} escapeHtml={false} className="test" /> */}
    </PostBody>
  )
}

export default Project
