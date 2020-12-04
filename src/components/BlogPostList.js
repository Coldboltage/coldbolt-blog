import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogPostList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        posts: nodes {
          excerpt(format: PLAIN, pruneLength: 600)
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            slug
          }
        }
      }
    }
  `)

  const { allMarkdownRemark: { posts } } = data;

    const postList = posts.map((post) => {
        const {excerpt, frontmatter:{date, title, slug}} = post
        return (
            <div className="new-post">
                <Link to={`${slug}`} className="post-title">{title}</Link>
                <p className="post-date">{date}</p>
            </div>
    )
  });
  return (
      <div>
        {postList}
      </div>
  )
}

export default BlogPostList

