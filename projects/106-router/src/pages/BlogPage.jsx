import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useEffect, useState, useContext } from 'react'
import PostCard from '../components/PostCard'
import { BlogContext } from '../contexts/blog.context'

function BlogPage() {
  const {posts, error, getPosts} = useContext(BlogContext)

  useEffect(() => {
    getPosts()
  }, [])

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post} />
      </li>
    )
  })

  return (
    <>
      <HeaderComponent />
      <h3>Blog page</h3>

      {/* Conditional render to show error message or loading message in case our request 
      is taking some time */}
      {error ? (
        <p>Something went wrong...</p>
      ) : postCards.length ?
        <ul>{postCards}</ul>
        :
        <p>Loading...</p>
      }
    </>

  )
}

export default BlogPage