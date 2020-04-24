/* eslint-disable react/destructuring-assignment */
// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {

  render() {
    const { title, subtitle, storyline,rating, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={imagePath} alt="Movie" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating className="movie-card-rating" rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
