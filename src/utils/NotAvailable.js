import React from 'react';

export default (props) => {
  return (
    <div className="simple-container">
      <p>{props.text}</p>
      <a href='/selectVehicle' className="a-btn">Back</a>
    </div>
  );
}
