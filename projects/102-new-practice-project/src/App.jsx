
import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import { useState } from 'react'

function App() {

  const [displayName, setDisplayName] = useState("")
  const login = (name) => {
    setDisplayName(name)
  }

  return (
    <div>
      {/* This is given by the Child1 component */}
      <h1>Welcome, {displayName}</h1>
      <Child1 handleLogin={login}/>
      <Child2 />
    </div>
  )
}

export default App
