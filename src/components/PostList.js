import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const PostList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 5
      ) {
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

  const {
    allMarkdownRemark: { posts },
  } = data

  return (
    <div>
      {posts.map((post, index) => {
        const {
          excerpt,
          frontmatter: { date, title, slug },
        } = post
        return (
          <div key={index} className="new-post">
            <Link to={`/${slug}`} className="post-title">
              {title}
            </Link>
            <p className="post-date">{date}</p>
            <p
              dangerouslySetInnerHTML={{ __html: excerpt }}
              className="post-content"
            ></p>
          </div>
        )
      })}
    </div>
  )
}

export default PostList
