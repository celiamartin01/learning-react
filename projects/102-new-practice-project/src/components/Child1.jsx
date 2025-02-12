import React from 'react'

function Child1(props) {

    const handleClick = () => {
      // This could be an input, an API call to a server to authenticate the user...
      // We are elevating this to the father component (App.jsx) to handle the state
      // instead of handling it here, as we did in the previous example (bad practice?)
        props.handleLogin("Celia")
    }

  return (
    <div className="bordered">
        <h2>Child 1 component</h2>
        <p>Username: {props.userName}</p>

        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Child1