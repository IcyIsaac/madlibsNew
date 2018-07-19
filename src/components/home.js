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

// things we need to fix
// placeholder
// gray and greem lables
// content labels
// generate button space/card height

export default Home;