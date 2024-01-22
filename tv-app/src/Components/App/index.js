//App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import ShowDetails from '../ShowDetails';
import ShowSearchResults from '../ShowSearchResults';
import './App.css';
import AllShows from '../AllShows';
import AllMovies from '../AllMovies'
import MovieDetails from '../MovieDetails'
import MoviesNavbar from '../MoviesNavbar'
import NotificationBanner from '../NotificationBanner';

function App() {
  return (
      <div>
   <Routes>
    <Route path="/movie" element={<MoviesMainPage />} />
    <Route path="/movie/:movieId" element={<MovieDetails />} />
    <Route path="/" element={<MainPage />} />
    <Route path="/Components/Home" element={<Home />} />
    <Route path="/shows/:showId" element={<ShowDetails />} />
    <Route path="/search" element={<ShowSearchResults />} />
  </Routes>
      </div>
  );
}

function MainPage() {
  return (
    <div>
      <Home />
      <NotificationBanner />
      <AllShows />
    </div>
  );
}

function MoviesMainPage() {
  return (
    <div>
      <MoviesNavbar />
      <AllMovies />
    </div>
  );
}

export default App;
