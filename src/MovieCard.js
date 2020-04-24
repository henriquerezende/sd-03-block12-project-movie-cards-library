import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <li className="movie-card">
        <img src={movie.imagePath} alt={`Cover ${movie.title}`} />
        <h4 className="movie-card-title">{ movie.title }</h4>
        <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
        <p className="movie-card-storyline">{ movie.storyline }</p>
        <Rating rating={movie.rating} />
      </li>
    );
  }
}

export default MovieCard;
