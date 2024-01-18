import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import ShowDetails from '../ShowDetails';
import SearchResults from '../SearchResults';
import './App.css';
import AllShows from '../AllShows'
function App() {
  return (
      <div>

        <AllShows />
      </div>
  );
}
export default App;
