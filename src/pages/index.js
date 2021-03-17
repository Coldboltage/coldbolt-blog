import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostList from "../components/PostList"

const IndexPage = () => {
  // const { allMarkdownRemark: { posts } } = data;
  // console.log(posts)

  // const postList = posts.map((post) => {
  //   const {excerpt, html, frontmatter:{date, slug, title}} = post
  //   return (
  //     <div className="post-list">
  //       <h5 className="post-title">{title}</h5>
  //       <p className="post-date">{date}</p>
  //       <p dangerouslySetInnerHTML={{ __html: excerpt }} className="post-content"></p>
  //     </div>
  //   )
  // })

  return (
    <Layout>
      <SEO title="Home" description="This is a test description of the front page" />
      <div className="container grid">
        <div className="user-grid" id="intro-left">
          <div className="">
            <Image style={{ width: "150px" }} />
            <h5 id="name">Alan Reid</h5>
            <p id="town">Bangor, Northern Ireland</p>
            <ul id="skills-qualities">
              <li>Esports SEO</li>
              <li>Esports Manager</li>
              <li>GatsbyJS</li>
              <li>React</li>
              <li>Meteor</li>
              <li>Memes</li>
            </ul>
          </div>
          <div>
            <p className="myself">I am an Esports SEO of 8 years but an aspiring self taught frontend developer. It has been my dream to slowly become a website developer and this website will document these events</p>
            <p className="myself">It is not enough to know how to do SEO but actually be able to program what is needed to create the solution or be able to know how it's to be done.</p>
            <p className="myself">I'm honestly not too sure what I'm going to write in this blog. I'm guessing I'll write about my life here and develop myself as a web developer, seo, manager and person. I'm glad though I've got to this stage. I'll do my best to update this as I go along.</p>
          </div>
        </div>
        <div className="" id="intro-right">
          {/* {postList} */}
          <PostList />
        </div>

      </div>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
//       posts: nodes {
//         frontmatter {
//           date(formatString: "DD MMMM YYYY")
//           slug
//           title
//         }
//         html
//         excerpt(format: PLAIN, pruneLength: 600)
//       }
//     }
//   }
// `

export default IndexPage


