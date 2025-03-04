import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

function BlogPage() {

  const [posts, setPosts] = useState([])

  // Error state variable to handle errors easily
  const [error, setError] = useState(false)

  const getPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()

      console.log(data)
      setPosts(data)

      // Dont forget to set error to false in case we are successful
      setError(false)
    }
    catch (e) {
      setError(true)
    }
  }

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