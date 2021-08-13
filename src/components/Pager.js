import React from "react"
import { Link } from "gatsby"
import * as styles from "../css/blog-template.module.css"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className={styles.pager}>
      <div>
        {previousPagePath && (
          <span>
            <Link to={previousPagePath}>Previous</Link>
          </span>
        )}
      </div>

      <div>
        {nextPagePath && (
          <span>
            <Link to={nextPagePath}>Next</Link>
          </span>
        )}
      </div>
    </div>
  )
}

export default Pager
