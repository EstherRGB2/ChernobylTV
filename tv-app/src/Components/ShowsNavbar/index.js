//ShowsNavbar.js

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShowSearchResults from '../ShowSearchResults';

function ShowsNavbar() {

  return (
    <>
      <div className = "nav-bar">

        <div className = "top-nav-bar">
          <Link className = "HomeLink-shows" to="/" >
            <h2 className="HomeLink">Chernobyl TV</h2>
          </Link>
          <div className="spacer">
              <NavLink className = "movie-home-button" to="/" activeClassName="active-link">Shows</NavLink>
              <NavLink className = "movie-home-button" to="/movie" activeClassName="active-link">Movies</NavLink>
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