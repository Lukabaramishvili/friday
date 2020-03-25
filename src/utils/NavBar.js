import React from 'react';
import logo from "./logo.png"

export default () => {
  return (
    <div className="nav-container">
      <a href='/'>
        <img className="logo-container" src={logo} alt="logo"/>
      </a>
    </div>
  );
}
