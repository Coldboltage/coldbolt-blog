import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styles from "../css/blog-template.module.css"

const BlogTemplate = ({ data }) => {
    const { blog: { html, frontmatter: { date, title, image } } } = data
    return (
        <Layout>
            <div className={`${styles.blogContainer}`} id="page-container" >
                <div className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>{title}</h1>
                    <h5 className={styles.center}>{date}</h5>
                </div>
                <div id={styles.blogFeaturedImage}>
                    <Img id={styles.blogFeaturedImage} fluid={image.childImageSharp.fluid}/>
                </div>
                <div className={styles.blogP} dangerouslySetInnerHTML={{ __html: html}}></div>
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
                      fluid (maxWidth: 800, quality: 80){
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                }
            }
        }
    }
`

export default BlogTemplate