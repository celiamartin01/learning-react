import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
  }

  useEffect(()=> {
    getUsers()
  }, [])

  const HTMLUsers = users.map((users) => {
    return (
      <div key={users.id}>
        <h3>{users.name}</h3>
        <p>emai: {users.email}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Calling an API with AXIOS</h1>
      <section> {HTMLUsers} </section>
    </div>
  )
}

export default App
