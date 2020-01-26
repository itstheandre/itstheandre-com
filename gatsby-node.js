/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const postQuery = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const posts = postQuery.data.allSanityPost.edges.map(({ node }) => node)
  posts.forEach(episode => {
    actions.createPage({
      path: `projects/${episode.slug.current}`,
      component: path.resolve("./src/components/template/project.jsx"),
      context: {
        slug: episode.slug.current,
        title: episode.title,
      },
    })
  })
}
