
import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import CompCycle from './components/CompCycle'
import { useState } from 'react'

function App() {

  const [displayName, setDisplayName] = useState("")
  const login = (name) => {
    setDisplayName(name)
  }

  const [showChild, setShowChild] = useState(true)

  return (
    <div>
      {/* This is given by the Child1 component */}
      <h1>Welcome, {displayName}</h1>
      <Child1 handleLogin={login} userName={displayName}/>
      <Child2 userName={displayName}/>

      <br/>

      <h1>Component life cycle</h1>
      <button onClick={() => setShowChild(!showChild)}>Toggle child</button>
      {showChild && <CompCycle/>}
    </div>
  )
}

export default App
