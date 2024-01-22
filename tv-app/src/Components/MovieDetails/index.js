//MovieDetails

import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink} from 'react-router-dom';
import Youtube from 'react-youtube'
import './MovieDetails.css'

export default function MovieDetails() {
const { movieId } = useParams();
const [ movie, setMovie ] = useState(null)
const [video, setVideo] = useState([])

useEffect(() => {

  const fetchMovieDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=d3c7620c1fb2f037ed1627728138494b`
    const res = await fetch(url)
    const data = await res.json();
    setMovie(data)
  }
  const getVideos = async() => {
   const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=d3c7620c1fb2f037ed1627728138494b`)
    const data = await res.json()
    setVideo(data.results)
  }
  fetchMovieDetails();
  getVideos();
}, [movieId]);
if (!movie) {
  return <div>Loading...</div>
}
return (
  <div>
    <div className = "nav-bar">
      <nav className = "top-nav-bar">
      <Link className = "HomeLink-shows" to="/" >
              <h2 className="HomeLink">Chernobyl TV</h2>
        </Link>
        <div className="spacer">
              <NavLink className = "movie-home-button" to="/" activeClassName="active-link">Shows</NavLink>
              <NavLink className = "movie-home-button" to="/movie" activeClassName="active-link">Movies</NavLink>
        </div>

      </nav>
    </div>

    <div className = "movie-details-container">
      <div className = "movie-details-img-wrapper">
        <img
          className = "movie-details-img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>

      <div className = "movie-details-body-and-video-container">
        {video.length > 0 ? (
          <div className = "video-container">
            <Youtube videoId={video[0]?.key} />
          </div>
        ) : (
          <div>No videos available</div>
        )}

        <div className = "movie-text-container">
          <h1 className = "movie-details-h1">{movie.original_title}</h1>
          <h4 className = "movie-details-h4">{movie.overview}</h4>

          <div className = "movie-date-and-runtime">
            <p className = "movie-details-p">{`Release Date: ${movie.release_date}`}</p>
            <p className = "movie-details-p">{`Runtime: ${movie.runtime} minutes`}</p>
          </div>

          <div className = "genres-and-language">
            <p className = "movie-details-p">{`Genres: ${movie.genres.map((genre) => genre.name).join(', ')}`}</p>
            <p className = "movie-details-p">{`Language: ${movie.original_language}`}</p>
          </div>

          <div className = "movie-popularity">
            <p className = "movie-details-p">{`Rating: ${movie.vote_average}`}</p>
            <p className = "movie-details-p">{`Vote Count: ${movie.vote_count}`}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
);
}

