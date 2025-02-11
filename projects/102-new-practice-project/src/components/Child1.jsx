import React from 'react'

function Child1(props) {

    const username = "Celia"

    const handleLogin = () => {
        props.handleLogin(username)
    }

  return (
    <div className="bordered">
        <h2>Child 1 component</h2>
        <p>Username: {username}</p>

        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Child1