// This file is commented out because it it's actions are duplicated in App.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShowSearchResults from '../ShowSearchResults';

function ShowsNavbar() {

  return (
    <>
      <div className = "nav-bar">

        <div className = "top-nav-bar">
          <Link className = "HomeLink-shows" to="/" >
            <h2 className="HomeLink">Chernobyl TV</h2>
          </Link>
          <Link to="/movie" className="movie-home-button">Go To Movies</Link>
        </div>

        <div>
          <ShowSearchResults />
        </div>

      </div>
    </>
  );
}

export default ShowsNavbar;