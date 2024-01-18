import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {HandleShowClick} from '../HandleShowClick'

export default function AllShows() {

  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
.then(res => res.json())
.then(res => setShows(res))
  }, [])

  return (
    <>
    <div>
      {shows.map(shows => (
        <div className="shows--card" key={shows.id}>
          <img onClick={() => HandleShowClick(shows.id)}
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