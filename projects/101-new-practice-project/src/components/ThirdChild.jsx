import React from 'react'
import { useState } from 'react'

// I'm repeating the "AnotherChild" thing, but now we get the userName from an input
function ThirdChild(props) {

const [userName, setUserName] = useState("")
// We change the value of the userName state with the input value
const handleChangeValue = (e) => {
    setUserName(e.target.value)
}

// When the button is clicked, we call the login function from the father component,
// but we pass the userName state as an argument
const handleLogin = () => {
    props.handleLogin(userName)
}

  return (
    <div className="bordered">
        <label htmlFor="username">Username: </label>
        <input type="text"
        placeholder="Enter your username" 
        id="username"
        value={userName}
        onChange={handleChangeValue}/>

        <br/>
        <button onClick={handleLogin}>Login</button>
    </div>
    
  )
}

export default ThirdChild