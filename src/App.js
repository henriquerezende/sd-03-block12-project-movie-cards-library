import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
