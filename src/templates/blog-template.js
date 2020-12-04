import React from 'react'
import { graphql } from "gatsby"

const BlogTemplate = ({data}) => {
    return (
        <div>
            <h1 className="">Hello I'm alive</h1>
        </div>
    )
}

export const query = graphql`
    query MyQuery($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            date(formatString: "DD MMMM YYY")
            title
            }
        }
    }
`

export default BlogTemplate