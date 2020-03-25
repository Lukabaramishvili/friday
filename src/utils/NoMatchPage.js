import React, { Component } from 'react';

class NoMatchPage extends Component {

  render() {
    return (
      <div className="simple-container">
        <p>Error 404 - No Such Page</p><br />
        <a href='/selectVehicle' className="a-btn">Return Home</a>
      </div>
    );
  }

}

export default NoMatchPage;
