import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Model extends Component {

  render() {
    const { model, make } = this.props
    return (
      <Link to={`/${make}/${model}/vehicle`} >
        <div className="list-container">
          <button className="list-btn">{model}</button>
        </div>
    </Link>
    );
  }

}

export default Model;
