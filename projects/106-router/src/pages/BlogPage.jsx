import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useEffect, useState, useContext } from 'react'
import PostCard from '../components/PostCard'
import { BlogContext } from '../contexts/blog.context'
import { UserContext } from '../contexts/user.context'

function BlogPage() {
  const {posts, error, getPosts} = useContext(BlogContext)
  const {login, logout} = useContext(UserContext)

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

      { /* We display this as an example of memoization: when the user state changes in this
      component, the whole component is rendered again, including all the posts, even when
      that posts information has not changed. To avoid that, we can use react memo to keep
      posts stored in memory so our app doesn't have to render it over and over when it's not
      changed ..?? i guess this is the correct explanation */}
      <button onClick = {login}>Login</button>
      <button onClick = {logout}>Log out</button>

      <h3 data-testid="blogpage-title">Blog page</h3>

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