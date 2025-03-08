import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useContext, useState } from 'react'
import { UserContext } from '../contexts/user.context'

function HomePage() {
  const { user, login, logout } = useContext(UserContext)

  // Dumb counter just to use buttons to test events
  const [counter, setCounter] = useState(0)

  return (
    <>
      <HeaderComponent />
      <h3 data-testid="homepage-title">HomePage</h3>
      <p>Welcome{user && <span>, {user.name}</span>}</p>

      <button onClick={login}>Login</button>
      <button onClick={logout}>Log out</button>

      <br />
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span data-testid="counter">{counter}</span>
      <button onClick={() => setCounter(counter + 1)} data-testid="increase-counter">+</button>

    </>

  )
}

export default HomePage