import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogPostList from "../components/BlogPostList"

const Blog = ({ data }) => {
    return (
        <Layout>
            <SEO title="Blog" description="Do you want to know more about Alan Reid? Here's the place to find his daily thoughts per day"/>
            <div className="container">
                <div className="blog-header">
                    <h1 className="blog-title" style={{ textAlign: "center" }}>Blog</h1>
                </div>
                <div className="grid">
                    <div className="blog-thoughts">
                        <p className="post-content">I decided to add this little bit here so that you can know why I've made a blog rather than thinking "oh here's a blog". I've made this blog so that I can record all the thoughts within the process of this website and every website in the future. It's a peak into the thoughts that goes through myself, Alan Reid and in some sense Coldbolt. </p>
                        <p className="post-content">I used to write a lot and I kind of regret not doing it as much as I've grown up. Making sure that I remember the issues that I made in the past, would allow me to become better as a person. In the same time, I wish to read about the best times that I had and to keep in person, some of the best pictures I've ever made.</p>
                        <p className="post-content">I aim to write about anything that comes into my mind that I feel is worth writing about. I aim to write at least once a day as per like a real blog. Is it interesting enough to read all the time? I don't think so. I think a lot of the time, I might just write about a code problem, I thought I had about esports and maybe even how the day went. I'm not sure but writing is a good outlet and as I write this now, I know that I'll become a better writer the more I read and write. Personal thoughts will be wrote here and if you find it, you'll know what is really going on with me and what I think of the world.</p>
                    </div>
                    {/* Blog List */}
                    <div className="blog-right-side">
                     <BlogPostList />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        excerpt(format: PLAIN, pruneLength: 600)
        frontmatter {
          title
          slug
          date(formatString: "DD MMMM YYYY")
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

export default Blog