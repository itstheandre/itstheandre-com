/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

async function createProjects({ actions, graphql }) {
  const projectTemplate = path.resolve("./src/components/template/project.jsx")
  const result = await graphql(`
    query CREATE_PAGES {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
            projectNumber
          }
        }
      }
    }
  `)
  const allProjects = result.data.allSanityProject.edges.map(({ node }) => node)
  allProjects.forEach(project => {
    console.log("LOOOOOOK    ", { project: project.projectNumber })
    const previous = (Number(project.projectNumber) - 1).toString()
    const after = (Number(project.projectNumber) + 1).toString()
    console.log(previous)
    actions.createPage({
      path: `/projects/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
        previous,
        after,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([createProjects({ actions, graphql })])
}
