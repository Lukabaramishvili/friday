import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const { model, make } = props
  return (
    <Link to={`/${make}/${model}/vehicle`} >
      <div className="list-container">
        <button className="list-btn">{model}</button>
      </div>
  </Link>
  );
}
