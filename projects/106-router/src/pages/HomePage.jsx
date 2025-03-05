import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useContext } from 'react'
import { UserContext } from '../contexts/user.context'

function HomePage() {
  const {user, login, logout} = useContext(UserContext)

  return (
    <>
        <HeaderComponent/>
        <h3>HomePage</h3>
        <p>Welcome{user && <span>, {user.name}</span>}</p>

        <button onClick = {login}>Login</button>
        <button onClick = {logout}>Log out</button>
    </>
    
  )
}

export default HomePage