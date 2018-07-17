import React, { Component } from 'react';

import Header from './header.js';
import Card from "./card";

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header()}
        <Card />
      </div>
    );
  }
}

export default Home;