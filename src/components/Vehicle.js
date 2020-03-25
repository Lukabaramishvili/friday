import React from 'react';

export default (props) => {
  const { vehicle } = props
  return (
    <div className="vehicle-card">
      <p>Make: {vehicle.make}</p>
      <p>Model: {vehicle.model}</p>
      <p>engine Power PS: {vehicle.enginePowerPS}</p>
      <p>engine Power KW: {vehicle.enginePowerKW}</p>
      <p>fuel Type: {vehicle.fuelType}</p>
      <p>engine Capacity: {vehicle.engineCapacity}</p>
    </div>
  );
}
