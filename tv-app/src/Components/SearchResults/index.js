// SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ searchResults }) {
  return (
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
  );
}

export default SearchResults;