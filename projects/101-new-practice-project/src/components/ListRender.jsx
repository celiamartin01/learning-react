import React from 'react'

const movies = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6"]

/* It's mandatory to add a key to each element of the array?? 
   Use ID or some unique property when using objects */
const HTMLmovies = movies.map((movie, index) => <p key={movie}>{index + 1} - {movie}</p>)

/* Actually you can just use an <ol> element so you don't need to add the index
   Just change <p> to <li> */
const HTMLmoviesOL = movies.map(movie => <li key={movie}>{movie}</li>)

function ListRender() {
  return (
    <div>
        {HTMLmovies}

        <ol>
            {HTMLmoviesOL}
        </ol>
            
    </div>
  )
}

export default ListRender