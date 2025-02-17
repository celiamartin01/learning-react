import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // Here we will keep the users data
  const [users, setUsers] = useState([])

  // Asynchronous function to fetch the users data. As it is asynchronous, we need to use the
  // async keyword and the await keyword to wait for the response from the API
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    // In this line we are transforming the data given by the API into JSON format
    const data = await response.json()

    // Now, we give those data to the users state
    setUsers(data)
  }

  // We're executing the getUsers function when the component is mounted (with useEffect 
  // and an empty array as we saw in the component cycles)
  useEffect(()=> {
    getUsers()
  }, [])

  // Now we need to see the structure of the data we are getting from the API and take the
  // information we want to display. We will use the map method to iterate over the data
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
      <h1> Using fetch to call an API</h1>

      <section>
        {HTMLUsers}
      </section>
    </div>
  )
}

export default App
