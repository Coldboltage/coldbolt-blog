import React from 'react'
import {Link} from "gatsby"

const NewPostList = ({ blogData }) => {
    return (
        <div>
            {blogData.map((post, index) => {
                const { frontmatter: { date, title, slug } } = post
                return (
                    <div key={index} className="new-post">
                        <Link to={`/${slug}`} className="post-title">{title}</Link>
                        <p className="post-date">{date}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default NewPostList
