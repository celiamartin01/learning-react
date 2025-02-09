import React from 'react'
import './DifferentAttribute.css'

// Example of some HTML attributes that are different in JSX
function DifferentAttribute() {
  return (
    <div>

        {/* Attribute class replaced by className*/}
        <div className="dark-theme">DifferentAttribute</div>

        {/* Attribute for replaced by htmlFor */}
        <label htmlFor="name">Name: </label>
        <input type="text" id="name"></input>

        {/* Attribute selected replaced by defaultValue */}
        <select defaultValue="2">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>

    </div>

    
  )
}

export default DifferentAttribute