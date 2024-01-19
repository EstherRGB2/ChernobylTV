import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AllShows from '../AllShows';
import SearchResults from '../SearchResults';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <Link to="/" className="HomeLink">
          Chernobyl TV
        </Link>
        <div className="headerContainer">
          {/* Pass the navigate function to the SearchResults component */}
          <SearchResults navigate={navigate} />
        </div>
      </nav>

      {/* Display all shows */}
      <AllShows />
    </>
  );
}

export default Home;