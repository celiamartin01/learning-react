import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUsername] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("El formulario se ha enviado")
    console.log(user)
  }

  const handleUsernameInput = (e) => {
    setUsername ({...user, username: e.target.value})
  }

  const handlePasswordInput = (e) => {
    setUsername ({...user, password: e.target.value})
  }

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Usuario: </label>
          <input 
          type="text" 
          id="username"
          onChange={handleUsernameInput}
          value={user.username}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Contraseña: </label>
          <input 
          type="password" 
          id="password" 
          onChange={handlePasswordInput}
          value={user.password}
          />
        </fieldset>

        <button>Enviar</button>
      </form>

      <button onClick={() => setUsername({username: "", password: ""})}>Clean</button>

    </div>
  )
}

export default App
