import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <div className="home">
      <h2>Select Your Vehicle</h2>
      <Link className="start-button" to="/selectVehicle">Start</Link>
    </div>
  );
}
