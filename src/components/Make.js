import React, { Component } from 'react';

class Make extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleSelect(e.target.value)
  }

  render() {
    const { make } = this.props
    return (
        <div className="list-container">
          <button className="list-btn" value={make} onClick={this.handleClick}>{make}</button>
        </div>
    );
  }

}

export default Make;
