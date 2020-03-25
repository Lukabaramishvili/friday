import React, { Component } from 'react';

class Search extends Component {

  render() {
    const { handleInputChange, inputText } = this.props
    return (
      <div>
        <input onChange={handleInputChange} value={inputText} type="text" className="search" placeholder="search your car..." />
      </div>
    );
  }

}

export default Search;
