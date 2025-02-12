import './AnotherChild.css'

function AnotherChild(props) {

// We want to show this variable userName in the h2 in the father component, using his login function
const userName = "Celia"

// We want to call the login function from the father component when we click the button
// That function will change the displayName state in the father component with this userName variable
const handleLogin = () => {
    props.handleLogin(userName)
}

  return (
    <div className="bordered">
        <h2>Child component</h2>
        <p>Username: {userName}</p>

        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default AnotherChild