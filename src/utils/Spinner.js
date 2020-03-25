import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img
        className="spinner-icon"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};
