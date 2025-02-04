import React from 'react'

function ConditionalRender() {
    const condition = true
    const condition2 = true

  return (
    <div>
        {condition && <h2>Shown if condition is true</h2>}
        {condition2 ? <h2>Shown if condition 2 is true</h2> : <h2>Condition 2 is false</h2>}
    </div>
  )
}

export default ConditionalRender