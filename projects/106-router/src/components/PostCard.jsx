import React from 'react'

function PostCard(props) {
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

export default PostCard