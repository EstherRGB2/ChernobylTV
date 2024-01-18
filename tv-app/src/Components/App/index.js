import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import ShowDetails from '../ShowDetails';
import SearchResults from '../SearchResults';
import './App.css';
import AllShows from '../AllShows';
function App() {
  return (
      <div>

        <AllShows />
      </div>
  );
}
export default App;
