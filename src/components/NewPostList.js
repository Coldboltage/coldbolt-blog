import React from 'react'
import {Link} from "gatsby"
import CategoryLabel from './CategoryLabel'

const NewPostList = ({ blogData }) => {
    return (
        <div>
            {blogData.map((post, index) => {
                const { frontmatter: { date, title, slug, category } } = post
                return (
                    <div key={index} className="new-post">
                        <Link to={`/${slug}/`} className="post-title">{title}</Link>
                        <p className="post-date">{date}</p>
                        {category && <CategoryLabel category={category}/>}
                    </div>
                )
            })}
        </div>
    )
}

export default NewPostList
