import React from 'react';
//App.js

import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import ShowDetails from '../ShowDetails';
import SearchResults from '../SearchResults';
import './App.css';
import AllShows from '../AllShows';

function App() {
  return (
      <div>
   <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/Components/Home" element={<Home />} />
    <Route path="/shows/:showId" element={<ShowDetails />} />
    <Route path="/search" element={<SearchResults />} />
  </Routes>
      </div>
  );
}

function MainPage() {
  return (
    <div>
      <Home />
      <AllShows />
    </div>
  );
}

export default App;
