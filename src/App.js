import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './features/movies/MovieList';
import FavoriteList from './features/movies/FavoriteList';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between py-4">
          <Link to="/" className="text-xl">Movies</Link>
          <Link to="/favorites" className="text-xl">Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
