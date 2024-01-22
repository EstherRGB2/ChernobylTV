// This file is commented out because it it's actions are duplicated in App.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShowSearchResults from '../ShowSearchResults';

function Home() {

  return (
    <>
      {/* <ShowsNavbar /> */}
      <nav className = "nav-bar">
        <div className = "top-nav-bar">
          <Link to="/" className="HomeLink">
            Chernobyl TV
          </Link>
          <Link to="/movie" className="movie-home-button">Go To Movies</Link>
        </div>
        <div className="SearchResultsContainer">
          <ShowSearchResults />
      </div>
      </nav>
    </>
  );
}

export default Home;