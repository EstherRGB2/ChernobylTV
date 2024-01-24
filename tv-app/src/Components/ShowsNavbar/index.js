//ShowsNavbar.js

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShowSearchResults from '../ShowSearchResults';
// import LoginButton from '../LoginButton'

function ShowsNavbar() {

  return (
    <>
      <div className = "nav-bar">

        <div className = "top-nav-bar">
          <Link className = "HomeLink-shows" to="/" >
            <h2 className="HomeLink">Chernobyl</h2>
            <img src= {process.env.PUBLIC_URL + '/ChernobylTV_Logo.png'}
                   alt="Chernobyl TV Logo"
                   className="logo-image"/>
          </Link>
          <div className="spacer">
              <NavLink className = "movie-home-button" to="/" >Shows</NavLink>
              <NavLink className = "movie-home-button" to="/movie" >Movies</NavLink>
              {/* <LoginButton /> */}
          </div>
        </div>

        <div>
          <ShowSearchResults />
        </div>

      </div>
    </>
  );
}

export default ShowsNavbar;