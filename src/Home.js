import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1>Select Your Vehicle</h1>
        <Link className="start-button" to="/selectVehicle">Start</Link>
      </div>
    );
  }

}

export default Home;
