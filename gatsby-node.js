const path = require("path")

// create pages dynamically
// Process to grab createPages. Needs to be Async as it takes time to get.
exports.createPages = async ({ graphql, actions }) => {
  // Destructure to get create pages from action
  const { createPage } = actions
  // Search for something unique as an identifier
  const result = await graphql(`
    {
        blogs: allMarkdownRemark {
            nodes {
                frontmatter {
                    slug
                }
            }
        }
    }
  `)

  // Determine what pages you want build
  result.data.blogs.nodes.forEach(blog => {
    // Function to create pages
    createPage({
      // The path to which the page will be created
      path: `blogs/${blog.frontmatter.slug}/`,
      // The template that will be used
      component: path.resolve(`src/templates/blog-template.js`),
      // Passing on information to the page as identifier. 
      context: {
        slug: blog.frontmatter.slug,
      },
    })
  })
}
