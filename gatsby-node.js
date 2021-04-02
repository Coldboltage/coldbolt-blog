const path = require("path");
const { paginate } = require('gatsby-awesome-pagination');


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
      allWpPost {
        nodes {
          uri
        }
      }
    }  
  `)



  // Paginate Function
  paginate({
    createPage,
    items: result.data.blogs.nodes,
    itemsPerPage: 6,
    pathPrefix: `/blog`,
    component: path.resolve(`src/templates/blog-list-template.js`)
  })

  // Determine what pages you want build
  result.data.blogs.nodes.forEach(blog => {
    // Function to create pages
    createPage({
      // The path to which the page will be created
      // path: `blog/${blog.frontmatter.slug}/`,
      path: `${blog.frontmatter.slug}/`,
      // The template that will be used
      component: path.resolve(`src/templates/blog-template.js`),
      // Passing on information to the page as identifier. 
      context: {
        slug: blog.frontmatter.slug,
      },
    })
  })
  
  // Determine what pages you want build
  result.data.allWpPost.nodes.forEach(post => {
    console.log(post.uri)
    // Function to create pages
    createPage({
      // The path to which the page will be created
      // path: `blog/${blog.frontmatter.slug}/`,
      path: `${post.uri}`,
      // The template that will be used
      component: path.resolve(`src/templates/wordpress-lab.js`),
      // Passing on information to the page as identifier. 
      context: {
        uri: post.uri,
      },
    })
  })
}
