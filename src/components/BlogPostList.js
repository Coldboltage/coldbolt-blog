import React from "react"
import NewPostList from "./NewPostList"

const BlogPostList = ({blogData}) => {
   return (
    <div>
      <NewPostList blogData={blogData}/>
    </div>
  )
}

export default BlogPostList

