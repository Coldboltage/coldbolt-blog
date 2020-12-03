import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PostList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        posts: nodes {
          excerpt(format: PLAIN, pruneLength: 600)
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  `)

  const { allMarkdownRemark: { posts } } = data;

    const postList = posts.map((post) => {
        const {excerpt, frontmatter:{date, title}} = post
        return (
            <div className="post-list">
                <h5 className="post-title">{title}</h5>
                <p className="post-date">{date}</p>
                <p dangerouslySetInnerHTML={{ __html: excerpt }} className="post-content"></p>
            </div>
    )
  });
  return (
      <div>
        {postList}
      </div>
  )
}

export default PostList

