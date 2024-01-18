//AllShows

import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function AllShows() {
  const [shows, setShows] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
.then(res => res.json())
.then(res => setShows(res))
  }, [])

  const handleShowClick = async (showId) => {
      const url = `https://api.tvmaze.com/shows/${showId}`; // Fetch details of the clicked movie
      const res = await fetch(url);
      const data = await res.json();
      navigate(`/shows/${showId}`);
    }
  return (
    <>
    <div>
      {shows.map(shows => (
        <div className="shows--card" key={shows.id}>
          <img onClick={() => handleShowClick(shows.id)}
          src={`${shows.image.original}`}
          alt={shows.name}
          width="250px"
          />
          </div>
      ))}
        </div>
      </>
  )
}

