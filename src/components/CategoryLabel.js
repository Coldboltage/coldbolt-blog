import React from 'react'
import * as styles from "../css/categoryLabel.module.css"
import {Link} from "gatsby"

const CategoryLabel = ({category}) => {
    return (
        <div>
            <Link to={`/${category}/`} className={styles.title}>{category}</Link>
        </div>
    )
}

export default CategoryLabel
