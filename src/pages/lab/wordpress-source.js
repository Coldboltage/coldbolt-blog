import React from 'react'
import { Link, graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Image from "gatsby-image"
import * as styles from "../../css/wordpress-source.module.css"

const Lab = ({ data }) => {
    console.log(data)
    const posts = data.allWpPost.nodes;
    console.log(posts)
    return (
        <Layout>
            <SEO title="Lab" description="This is where I test the stuff that I think I can make work for the site. I have no idea what I'm doing here"></SEO>
            <div className="container blog-title">
                <h1>WordPress Sourcing</h1>
                <p>An attempt to grab pages from <a href="https://coldboltseo.com">ColdboltSEO.com</a></p>
            </div>
            <div className="container">
                <div className={styles.gridThree}>
                    {posts.map((post, index) => {
                        const { title, link } = post
                        const fluid = post.featuredImage.node.localFile.childImageSharp.fluid
                        return (
                            <div key={index} className={styles.gridImage}>
                                <Link to={`https://coldboltseo.com${post.link}`}>
                                    <Image fluid={fluid} className={styles.test}/>
                                    {post.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Layout>
    )
}

export const query = graphql`
  {
    allWpPost {
      nodes {
        title
        link
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
      }
    }
  }
`

export default Lab