import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Youtube from 'react-youtube'
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
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}/>
          <h1>{movie.original_title}</h1>
          <h4>{movie.overview}</h4>
          <p>{movie.popularity}</p>
          {video.length > 0 ? <Youtube videoId={video[0]?.key} /> : <div>No videos available</div>}
        </div>
)
}