import React from 'react'
import {Link} from "gatsby"

const Pager = ({pageContext}) => {
    const {previousPagePath, nextPagePath} = pageContext
    console.log(nextPagePath)
    return (
        <div>
            {previousPagePath && (
                <div>
                    <span><Link to={previousPagePath}>Previous</Link></span>
                </div>
            )}
            {nextPagePath && (
                <span><Link to={nextPagePath}>Next</Link></span>
            )}
        </div>
    )
}

export default Pager
