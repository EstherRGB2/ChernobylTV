//ShowDetails

import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink} from 'react-router-dom';
import './deets.css'; // importing the css file here from ShowDetails folder
// import LoginButton from '../LoginButton'
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
              <div className = "nav-bar">
                <nav className = "top-nav-bar">
                  <Link className = "HomeLink-shows" to="/" >
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
              </div>

          <div className="show-details-container">
            <div className="show-details-img-wrapper">
              <img className="show-details-img"
                    src={show.image && show.image.medium ?
                    show.image.medium :
                    `${process.env.PUBLIC_URL}/NoImage.png`} alt={show.name} />
            </div>
            <div className = "show-details-body">
              <ul>
                <li><h1 className = "show-details-h1">{show.name}</h1></li>
                <li><p className = "show-details-p">{show.summary}</p></li>
                <li><h4 className = "show-details-h4">{`Premiered: ${show.premiered}`}</h4></li>
                <li><p className = "show-details-p">{`Genres: ${show.genres.join(', ')}`}</p></li>
                <li><p className = "show-details-p">{`Language: ${show.language}`}</p></li>
                <li><p className = "show-details-p">{`Rating: ${show.rating.average}`}</p></li>
              </ul>
            </div>
          </div>
              {/* Copyright footer was inserted here. TNT Kuttler Co*/}
          <footer className="copyright">
            &copy; {new Date().getFullYear()} TNT Kuttler Co. All Rights Reserved.
          </footer>

        </div>
)
}