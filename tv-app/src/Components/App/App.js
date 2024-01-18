import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ShowDetails from './ShowDetails';
import SearchResults from './SearchResults';
import './App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/movie/:id" element={<ShowDetails />} /> {/* Movie details route */}
          <Route path="/search" element={<SearchResults />} /> {/* Search results route */}
        </Routes>
        <Home />
      </div>
  );
}
export default App;
