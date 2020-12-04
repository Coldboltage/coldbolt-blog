import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../css/blog-template.css"

const BlogTemplate = ({ data }) => {
    const { blog: { html, frontmatter: { date, title, image } } } = data
    return (
        <Layout>
            <div className="blog-container">
                <div className="blog-header">
                    <h1 className="blog-title" style={{ textAlign: "center" }}>{title}</h1>
                    <h5 className="center">{date}</h5>
                </div>
                <div id="blog-featured-image">
                    <Img id="featured-image" fluid={image.childImageSharp.fluid}/>
                </div>
                <div className="blog-p" dangerouslySetInnerHTML={{ __html: html }}></div>
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
                image {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                }
            }
        }
    }
`

export default BlogTemplate