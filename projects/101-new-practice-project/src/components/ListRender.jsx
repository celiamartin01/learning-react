import React from 'react'

const movies = ["Movie 1", "Movie 2", "Movie 3", "Movie 4"]
const movies2 = ["Movie 11", "Movie 22", "Movie 33", "Movie 44"]

/* It's mandatory to add a key to each element of the array?? 
   Use ID or some unique property when using objects */
const HTMLmovies = movies.map((movie, index) => <p key={movie}>{index + 1} - {movie}</p>)

/* Actually you can just use an <ol> element so you don't need to add the index
   Just change <p> to <li> */
const HTMLmoviesOL = movies2.map(movie2 => <li key={movie2}>{movie2}</li>)

/* Example with an object array */
const animals = [
  {id: 1, 
    name: "Dog",
    url: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"
  },
  {id: 2, 
    name: "Cat",
    url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"
  },
  {id: 3, 
    name: "Rabbit",
    url: "https://storage.googleapis.com/pod_public/1300/169106.jpg"
  }
]

const HTMLanimals = animals.map((animal, index) => {
  return (
    <div>
      <p key={animal.id}>{animal.name}</p>
      <img src={animal.url} alt={animal.name} width="80px"/>
    </div>
  )
})

function ListRender() {
  return (
    <div>
        {HTMLmovies}

        <ol>
            {HTMLmoviesOL}
        </ol>

        {HTMLanimals}
            
    </div>
  )
}

export default ListRender