import { useNavigate } from 'react-router-dom'
import {useState} from 'react'



export const HandleShowClick = async (showId) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(null)
    const url = `https://api.tvmaze.com/shows/${showId}`; // Fetch details of the clicked movie
    const res = await fetch(url);
    const data = await res.json();
    setShow(data); // Store selected movie details in state
    navigate(`/shows/${showId}`);
  }