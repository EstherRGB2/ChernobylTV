//App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowsNavbar from '../ShowsNavbar';
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
    <Route path="/Components/Home" element={<ShowsNavbar />} />
    <Route path="/shows/:showId" element={<ShowDetails />} />
    <Route path="/search" element={<ShowSearchResults />} />
    <Route path="/shows" element={<AllShows />} />
  </Routes>
      </div>
  );
}

function MainPage() {
  return (
    <div>
      <NotificationBanner />
      <ShowsNavbar />
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
