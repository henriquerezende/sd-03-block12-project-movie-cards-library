// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (<div>{movies}</div>);
  }
}

export default MovieList;
