import React, { Component } from 'react';
import Make from './Make'

class MakesList extends Component {

  render() {
    const { makes, handleSelect } = this.props
    return (
      <div>
        List of Manufacturers
        <ul>
        {
          makes.map((make, id) => {
            return <Make key={id} make={make} handleSelect={handleSelect}/>
          })
        }
        </ul>
      </div>
    );
  }

}

export default MakesList;
