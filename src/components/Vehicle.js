import React, { Component } from 'react';

class Vehicle extends Component {

  render() {
    const { vehicle } = this.props
    return (
      <div className="vehicle-card">
        <p>MAKE: {vehicle.make}</p>
        <p>MODEL: {vehicle.model}</p>
        <p>engine Power PS: {vehicle.enginePowerPS}</p>
        <p>engine Power KW: {vehicle.enginePowerKW}</p>
        <p>fuel Type: {vehicle.fuelType}</p>
        <p>engine Capacity: {vehicle.engineCapacity}</p>
      </div>
    );
  }

}

export default Vehicle;
