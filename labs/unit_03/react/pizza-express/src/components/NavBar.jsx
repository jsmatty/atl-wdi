import React, { Component } from 'react';

class NavBar extends Component {
  render () {
    return (
       <div className="navbar">
          <a>Our Story</a>
          <a>Menu</a>
          <h1>Pizza Express</h1>
          <a>Locations</a>
          <a>Contact</a>
      </div>
    );
  }
}

export default NavBar;