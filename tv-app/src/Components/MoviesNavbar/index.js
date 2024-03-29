import React from 'react'
import {useState} from 'react'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import './moviesNavbar.css'
// import LoginButton from '../LoginButton'
// import './search.css';

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
          <nav className="top-nav-bar">
            <Link className = "HomeLink-shows" to="/">
              <h2 className="HomeLink">Chernobyl</h2>
              <img src= {process.env.PUBLIC_URL + '/ChernobylTV_Logo.png'}
                   alt="Chernobyl TV Logo"
                   className="logo-image"/>
            </Link>
            <div className="spacer">
              <NavLink className = "movie-home-button" to="/">Shows</NavLink>
              <NavLink className = "movie-home-button" to="/movie">Movies</NavLink>
              {/* <LoginButton /> */}
            </div>
          </nav>

        <div className="search-wrapper-movie">
          <input className="Search" type="text" placeholder="Search" name="query"
            value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button className="submit" type="submit">Search</button>
        </div>
      </form>

        {movies.length > 0 && (
          <div className="search-results-container">
            <h1 className="search-results-title" >Search Results
            <button onClick={() => setMovies([])} className="close-search-results">X</button>
            </h1>
            <ul className="search-items-container">
              {movies.map(movies => (
                <li className="search-result-item" key={movies.id}>
                  <div className="show-item">
                    <img onClick={() => handleMovieClick(movies.id)}
                      src={movies.poster_path ?
                        `https://image.tmdb.org/t/p/w500/${movies.poster_path}` :
                        `${process.env.PUBLIC_URL}/NoImage.png`}
                      alt={movies.title}
                      width="250px"
                      className="search-result-image"
                    />
                    <p className="search-result-title">{movies.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

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
