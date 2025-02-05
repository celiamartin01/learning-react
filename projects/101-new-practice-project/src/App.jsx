
import './App.css'
import { useState } from 'react'

import ExtensionExample from './components/ExtensionExample.jsx'
import Menu from './components/Menu.jsx'
import PlaceHolderExample from './components/PlaceHolderExample.jsx'
import ConditionalRender from './components/ConditionalRender.jsx'
import ListRender from './components/ListRender.jsx'
import Child from './components/Child.jsx'

function App() {

  function saySomething() {
    console.log('Something')
  }

  // Creation of state example
  const [number, setNumber] = useState(0)     
  function increaseNumber() {
    return (
      setNumber(number + 1)
    )
  }

  // Object to give to the child component as a prop
  const person =
    { 
      id: 1,
      name: "Juan",
      age: 30
    }
  

  return (
    <div>
      {/* Use of events example */}
      <h1 onClick={saySomething}>Hi</h1>      
      <Menu/>
      <h2>Another h2 example</h2>
      <ExtensionExample/>

      {/* Use of state example */}
      <div onClick={increaseNumber}>Number : {number}</div>      

      <PlaceHolderExample/>  
      <ConditionalRender/>
      <ListRender/>

      {/* Props example */}
      <Child msg="Message from father component" person={person}/>

    </div>
  )
}

export default App
