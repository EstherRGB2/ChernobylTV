//AllMovies.js

import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const api_key = "d3c7620c1fb2f037ed1627728138494b"
export default function AllMovies() {
  const [movie, setMovie] = useState(null)
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d3c7620c1fb2f037ed1627728138494b`)
.then(res => res.json())
.then(res => setMovies(res.results))
  }, [])

  const handleMovieClick = async (movieId) => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=d3c7620c1fb2f037ed1627728138494b`; // Fetch details of the clicked movie
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results); // Store selected movie details in state
      navigate(`/movie/${movieId}`);
  }
  return (
    <>
    <div>
      {movies.map(movies => (
        <div className="movies--card" key={movies.id}>
          <img onClick={() => handleMovieClick(movies.id)}
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={movies.title}
          width="250px"
          />
          </div>
      ))}
        </div>
      </>
  )
}