import React from 'react';
import MovieCard from './MovieCard';

// Este componente representará toda a área com os cartões de filmes.
// MovieList deve receber uma prop movies, que é um array de objetos com informações de um filme.

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((m) => (
          <MovieCard key={m.imagePath} movie={m} />
        ))}
      </div>
    );
  }
}

export default MovieList;
