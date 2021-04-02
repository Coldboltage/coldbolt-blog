import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styles from "../css/blog-template.module.css"

const WordPressLab = ({ data }) => {
    const { wpPost: { title, date, content:html } } = data
    const fluid = data.wpPost.featuredImage.node.localFile.childImageSharp.fluid
    return (
        <Layout>
            <div className={styles.blogContainer}>
                <div className={styles.blogHeader}>
                    <h1 className={styles.blogTitle}>{title}</h1>
                    <h5 className={styles.center}>{date}</h5>
                </div>
                <div id={styles.blogFeaturedImage}>
                    <Img id={styles.blogFeaturedImage} fluid={fluid}/>
                </div>
                <div className={styles.blogP} dangerouslySetInnerHTML={{ __html: html}}></div>
            </div>

        </Layout>
    )
}

export const query = graphql`
    query WordPressResults($uri: String) {
        wpPost(uri: {eq: $uri}) {
        title
        date(formatString: "Do MMMM YYYY")
        featuredImage {
            node {
            localFile {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                }
            }
            }
        }
        content
        }
    }
`

export default WordPressLab