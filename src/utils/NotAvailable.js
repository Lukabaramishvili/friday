import React, { Component } from 'react';

class NotAvailable extends Component {

  render() {
    return (
      <div className="simple-container">
        <p>{this.props.text}</p>
        <a href='/selectVehicle' className="a-btn">Back</a>
      </div>
    );
  }

}

export default NotAvailable;
