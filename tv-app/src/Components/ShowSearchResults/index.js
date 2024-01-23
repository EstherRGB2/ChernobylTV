import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './search.css';

function ShowSearchResults({ navigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setSearchResults(data);
      // Use the passed navigate function to redirect to the search results page
      navigate(`/search?query=${searchQuery}`);
    } catch (error) {
      console.error('Error fetching data from TVMaze API', error);
    }
  };

  return (
    <div >
      <form className = "search-wrapper-shows" onSubmit={handleSearch}>
        <input
          type="text"
          name="q"
          className="Search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input className="submit" type="submit" value="Search" />
      </form>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className = "search-results-container">
          <h1 className = "seach-results-container-title">Search Results
          <button onClick={() => setSearchResults([])} className="close-search-results">X</button>
          </h1>
          <ul className = "search-items-container">
          {searchResults.map((result) => (
              <li className = "search-result-item" key={result.show.id}>
                <Link to={`/shows/${result.show.id}`}>
                  <div className="show-item">
                  <img className="search-result-image"
                    src={result.show.image && result.show.image.medium ?
                    result.show.image.medium :
                    `${process.env.PUBLIC_URL}/NoImage.png`} alt={result.show.name} />
                    <p className = "search-result-title">{result.show.name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowSearchResults;
