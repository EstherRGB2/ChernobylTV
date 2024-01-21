import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AllShows from '../AllShows';
import SearchResults from '../SearchResults';

function Home() {

  return (
    <>
      <nav>
        <Link to="/" className="HomeLink">
          Chernobyl TV
        </Link>
        <Link to="/movie" className="movie-home-button">Go To Movies</Link>
      </nav>

      <div className="SearchResultsContainer">
          <SearchResults />
      </div>

      <AllShows />

    </>
  );
}

export default Home;