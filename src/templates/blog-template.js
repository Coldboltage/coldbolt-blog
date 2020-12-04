import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../css/blog-template.css"

const BlogTemplate = ({ data }) => {
    const { blog: { html, frontmatter: { date, title } } } = data
    return (
        <Layout>
            <div className="blog-container">
                <div className="blog-header">
                    <h1 className="blog-title" style={{ textAlign: "center" }}>{title}</h1>
                    <h5 className="center">{date}</h5>
                </div>
                <p dangerouslySetInnerHTML={{ __html: html }}></p>
            </div>

        </Layout>
    )
}

export const query = graphql`
    query MyQuery($slug: String) {
        blog: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                date(formatString: "DD MMMM YYYY")
                title
            }
        }
    }
`

export default BlogTemplate