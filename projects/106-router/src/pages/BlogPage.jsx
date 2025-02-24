import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

function BlogPage() {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    console.log(data)
    setPosts(data)
  }

  useEffect(()=> {
      getPosts()
    }, [])

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}/>
      </li>
    )
  })

  return (
    <>
      <HeaderComponent/>
      <h2>Blog page</h2>
      <ul>{postCards}</ul>
    </>
    
  )
}

export default BlogPage