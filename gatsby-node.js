const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")
const { resourceLimits } = require("worker_threads")

// create pages dynamically
// Process to grab createPages. Needs to be Async as it takes time to get.
exports.createPages = async ({ graphql, actions }) => {
  // Destructure to get create pages from action
  const { createPage } = actions
  // Search for something unique as an identifier
  const result = await graphql(`
    query {
      blogs: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            category
          }
        }
      }
      life: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "life" } } }
      ) {
        nodes {
          frontmatter {
            test: slug
          }
        }
      }
      categories: allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    }
  `)

  // Category pagination

  // Loop through each category
  result.data.categories.distinct.forEach(category => {
    // Create a filtered array where the frontmatter equals the category namebeing looped
    const filtered = result.data.blogs.nodes.filter(post => {
      if (post.frontmatter.category === category) return post
    })
    paginate({
      createPage,
      // The filtered posts
      items: filtered,
      itemsPerPage: 6,
      pathPrefix: `${category}/`,
      component: path.resolve(`src/templates/category-list.js`),
      // Context is used for GraphQL and pageContext
      context: {
        category: category,
        test: "Alan is awesome",
      },
    })
  })

  // const life = await graphql (`
  //   query category {
  //     categories: allMarkdownRemark(filter: {frontmatter: {category: {eq: "life"}}}) {
  //       nodes {
  //         frontmatter {
  //           test:slug
  //         }
  //       }
  //     }
  //   }
  // `)

  // Paginate Function
  paginate({
    createPage,
    items: result.data.blogs.nodes,
    itemsPerPage: 6,
    pathPrefix: `/blog`,
    component: path.resolve(`src/templates/blog-list-template.js`),
  })

  // paginate({
  //   createPage,
  //   items: result.data.life.nodes,
  //   itemsPerPage: 6,
  //   pathPrefix: `/life`,
  //   component: path.resolve(`src/templates/category-list.js`),
  // })

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
  // result.data.allWpPost.nodes.forEach(post => {
  //   // Function to create pages
  //   createPage({
  //     // The path to which the page will be created
  //     // path: `blog/${blog.frontmatter.slug}/`,
  //     path: `${post.uri}`,
  //     // The template that will be used
  //     component: path.resolve(`src/templates/wordpress-lab.js`),
  //     // Passing on information to the page as identifier.
  //     context: {
  //       uri: post.uri,
  //     },
  //   })
  // })
}
