//Home.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AllShows from './AllShows';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <>
      <nav>
          {/* Navigation links can be added here */}
          <Link to="/" className="HomeLink" >Chernobyl TV</Link>
          {/* You can add more links if needed */}

          <div className="headerContainer">
            <form className="Search" onSubmit={handleSearch}>
              <input
                type="text"
                name="q"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <input className = "submit" type="submit" value="Search" />
            </form>
            </div>
        </nav>

      <AllShows />

    </>
  );
}

export default Home;
