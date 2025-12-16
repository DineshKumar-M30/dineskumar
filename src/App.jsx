import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/HomeScreen';
import WatchlistScreen from './pages/WatchlistScreen';
import SearchScreen from './pages/SearchScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/watchlist" element={<WatchlistScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
