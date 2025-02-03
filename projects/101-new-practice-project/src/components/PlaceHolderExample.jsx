import React from 'react'
import { useState } from 'react'

function PlaceHolderExample() {
    const myText = "Your name"
    const [userText, setInputText] = useState('')

    // We can keep the input value in a state
    function handleInput(e) {
        setInputText(e.target.value)
    }

    return (
        <div>
            {/* We are updating this h2 with the input value */}
            <h2>{userText}</h2>
            <input 
                type='text' 
                placeholder={myText}
                onChange={handleInput}/>
        </div>
        
    )
}

export default PlaceHolderExample