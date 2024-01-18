import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AllShows from '../AllShows';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
      const data = await response.json();

      setSearchResults(data);
      navigate(`/search?query=${searchQuery}`);
    } catch (error) {
      console.error('Error fetching data from TVMaze API', error);
    }
  };

  return (
    <>
      <nav>
        <Link to="/" className="HomeLink">
          Chernobyl TV
        </Link>
        <div className="headerContainer">
          <form className="Search" onSubmit={handleSearch}>
            <input
              type="text"
              name="q"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input className="submit" type="submit" value="Search" />
          </form>
        </div>
      </nav>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.show.id}>
                <Link to={`/show/${result.show.id}`}>{result.show.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display all shows if no search results */}
      {searchResults.length === 0 && <AllShows />}
    </>
  );
}

export default Home;
