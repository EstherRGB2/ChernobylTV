import React from 'react'
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MoviesNavbar() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting")

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=d3c7620c1fb2f037ed1627728138494b`

  const res = await fetch(url);
  const data = await res.json()
  setMovies(data.results);
  }
  const handleMovieClick = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=d3c7620c1fb2f037ed1627728138494b`; // Fetch details of the clicked movie
    const res = await fetch(url);
    const data = await res.json();
    setSelectedMovie(data.results); // Store selected movie details in state
    navigate(`/movie/${movieId}`);
}
  return (
      <>
      <form className="nav-bar" onSubmit={searchMovies}>
          <nav className="header-container">
            <h2 className="HomeLink">Chernobyl TV</h2>
            <Link className = "movie-home-button" to="/">Go To Shows</Link>
          </nav>

        <div className="search-wrapper-movie">
          <input className="Search" type="text" placeholder="Search" name="query"
            value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button className="submit" type="submit">Search</button>
        </div>
      </form>

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
      {selectedMovie && ( // Render selected movie details if available
        <div>
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.description}</p>
          {/* Display other details of the selected movie */}
        </div>
      )}
      </>

  )
      }
