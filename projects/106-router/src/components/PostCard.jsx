import React from 'react'
import { Link } from 'react-router-dom'

function PostCard(props) {
  console.log("Post rendered")

    const {post} = props
  return (
    <article>
        <h3>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.body}</p>
    </article>
  )
}

/* This is memoization: we keep those posts storaged in memory once they're rendered,
so they're not rendered again when a state changes in that component if it does not 
affect these posts */
export default React.memo(PostCard)