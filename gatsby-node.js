const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(item => {
    actions.createPage({
      path: '/projects/' + item.node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: item.node.frontmatter.slug }
    })
  })
}