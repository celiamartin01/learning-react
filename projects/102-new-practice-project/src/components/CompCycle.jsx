import { useState, useEffect } from "react"

function CompCycle() {

  const [counter, setCounter] = useState(0)

  // This works only when the component is mounted
  // (open the app, click the toggle button)
  // We just added an empty array as the second argument
  useEffect( () => {
    console.log("Child has been mounted")
  }, [])

  // This works each time the component is rendered (open the app, click the button...)
  // Also works when a state variable changes (example with the counter)
  useEffect( () => {
    console.log("Child has been rendered")
  })

  // This works only when the 'counter' variable changes
  useEffect( () => {
    console.log("Variable 'counter' has changed")
  }, [counter])

  // This works when the component is dismounted
  useEffect( () => {
    return () => {
      console.log("Component has been dismounted")
    }
  }, [])

  return (
    <div className="bordered">
        <p>This is a child component</p>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default CompCycle