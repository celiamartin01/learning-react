import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useContext } from 'react'
import { UserContext } from '../contexts/user.context'

function HomePage() {
  const {user, setUser} = useContext(UserContext)
  return (
    <>
        <HeaderComponent/>
        <h3>HomePage</h3>
        <p>Welcome, {user}</p>
    </>
    
  )
}

export default HomePage