import React from "react"
import Layout from "../../components/layout"
import * as styles from "../../css/spacex.module.css"
import Image from "gatsby-image"
import { graphql } from "gatsby"

const SpaceX = ({
  data: {
    spacex: { ships },
  },
}) => {
  const filteredShips = ships.filter(ship => ship.imageSharp !== null)
  const newShips = filteredShips.filter(
    ship => ship.imageSharp.publicURL !== null
  )
  // console.log(newShips)

  return (
    <Layout>
      <div className="container">
        <h1 className="blog-title">SpaceX and GraphQL</h1>
        <p>
          This page is to test if I can programatically make pages with many
          different properties. I'm not too sure what's going to come of this
          but I'm probably going to do something very similar to how I worked
          with the WordPress post. I'll figure something out
        </p>
        <h5 className="blog-title">Update</h5>
        <p>
          This ended up being a completely different project. Unless ID's are
          assigned to each and everything, I can't know what fields are related
          to what. What this project did end up becoming, was figuring out how
          to transform an external image from a graphql value to something which
          was optimised. With a lot of trouble, the solutions were found!
        </p>
        <div className={styles.grid}>
          {newShips.map((ship, index) => {
            const {
              id,
              imageSharp: { publicURL },
            } = ship
            return (
              <div key={id}>
                <img src={publicURL} className={styles.ships}/>
              </div>
            )
          })}
        </div>
        <p>
          It was the first time encountering problems via filters. I had to
          filter out ships if a ship didn't have the property for
          childImageSharp, then it would collaspe the loop. I assumed all that
          would happen would be that the loop would give a null as the parent,
          imageSharp, was null but in recollection, there's no way this can
          happen as childImageSharp wouldn't exist to evaluate. So I filtered if
          imageSharp was present and then afterwards, filtered again if
          childImageSharp was present. This did the trick. I learnt I had to be
          far more specific. Interesting{" "}
        </p>
        <p>
          I find it funny that I got boats as ships rather than spaceships. I
          was expecting the images to be spaceships. This feels like a bit of a
          let down. Oh well
        </p>
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    spacex {
      ships {
        id
        imageSharp {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        image
        name
      }
    }
  }
`

export default SpaceX
