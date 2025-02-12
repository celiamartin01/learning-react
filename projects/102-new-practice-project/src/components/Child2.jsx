import React from 'react'

function Child2(props) {
  return (
    <div className="bordered">
        <h2>Child 2 component</h2>
        <p> This variable is given by Child 1: {props.userName}</p>
    </div>
  )
}

export default Child2