import React from 'react'
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../css/blog-template.module.css"

const BlogTemplate = ({ data }) => {
    const { blog: { html, frontmatter: { date, title, image } } } = data
    const newImage = getImage(image)
    return (
        <Layout>
            <div className={`${styles.blogContainer}`} id="page-container" >
                <div className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>{title}</h1>
                    <h5 className={styles.center}>{date}</h5>
                </div>
                <p className="waves-effect waves-light btn-small" onClick={() => navigate(-1)}>Back</p>
                <div id={styles.blogFeaturedImage}>
                    <GatsbyImage id={styles.blogFeaturedImage} image={newImage} alt="blog image"/>
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
                        gatsbyImageData(
                            quality: 80
                            layout: CONSTRAINED
                            width: 800
                            formats: [AVIF, AUTO]
                            placeholder: TRACED_SVG
                            )
                    }
                }
            }
        }
    }
`

export default BlogTemplate