import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "alanprofile.jpg" }) {
        childImageSharp {
            gatsbyImageData(
              width: 150
              quality: 80
              formats: AUTO
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
        }
      }
    }
  `)

  const newImage = getImage(data.placeholderImage.childImageSharp.gatsbyImageData)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    <Link to="/about">
      <GatsbyImage
        image={newImage}
        // className="profile"
      />
    </Link>
  )
}

export default Image
