import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

function SearchResults({ navigate }) {
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
    <div>
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

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className = "search-results-container">
          <h2>Search Results:</h2>
          <ul className = "search-items-container">
          {searchResults.map((result) => (
              <li className = "search-result-item" key={result.show.id}>
                <Link to={`/shows/${result.show.id}`}>
                  <img className= "search-result-image" src={result.show.image && result.show.image.medium} alt={result.show.name} />
                  {result.show.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
