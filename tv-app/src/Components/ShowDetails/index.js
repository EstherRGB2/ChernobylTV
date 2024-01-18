import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

export default function ShowDetails() {
const { showId } = useParams();
const [ show, setShow ] = useState(null)
useEffect(() => {

  const fetchShowDetails = async () => {
    const url = `https://api.tvmaze.com/shows/${showId}`
    const res = await fetch(url)
    const data = await res.json();
    setShow(data)
  }
  fetchShowDetails();
}, [showId]);
if (!show) {
  return <div>Loading...</div>
}
return (
        <div>
          <img src={show.image.medium} alt={show.name}/>
          <h1>{show.name}</h1>
          <h4>{`Premiered:${show.premiered}`}</h4>
          <p>{show.genres}</p>
          <p>{show.language}</p>
        </div>
)
}