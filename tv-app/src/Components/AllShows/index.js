
//AllShows

import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NotificationBanner from '../NotificationBanner'; // im import the NotificationBanner component right on this line
export default function AllShows() {
  const [show, setShow] = useState(null)
  const [shows, setShows] = useState([])
  const navigate = useNavigate()



  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((res) => setShows(res));
  }, []);

  const handleShowClick = async (showId) => {

      const url = `https://api.tvmaze.com/shows/${showId}`; // Fetch details of the clicked movie
      const res = await fetch(url);
      const data = await res.json();
      setShow(data); // Store selected movie details in state
      navigate(`/shows/${showId}`);
    }

  return (
    <>
      <NotificationBanner /> {/* added this line so that the banner is actually rendered in the page */}
      <div>
        {shows.map((show) => (
          <div className="shows--card" key={show.id}>
            <img
              onClick={() => handleShowClick(show.id)}
              src={`${show.image.original}`}
              alt={show.name}
              width="250px"
            />
          </div>
      ))}
        </div>
      </>
  )
}

