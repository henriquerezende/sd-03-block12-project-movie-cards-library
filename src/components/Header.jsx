import React from 'react';

// O texto deverá estar dentro de uma tag h1, que por sua vez deve estar dentro de uma tag header.

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
