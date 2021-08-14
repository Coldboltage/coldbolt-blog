import React from "react"
import { Link } from "gatsby"
import * as styles from "../css/blog-template.module.css"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className={styles.pager}>
      <div>
        {previousPagePath && (
            <Link to={previousPagePath}>Previous</Link>
        )}
      </div>
      <div>
        {pageContext.humanPageNumber} / {pageContext.limit}
      </div>
      <div>
        {nextPagePath && (
            <Link to={nextPagePath}>Next</Link>
        )}
      </div>
    </div>
  )
}

export default Pager
