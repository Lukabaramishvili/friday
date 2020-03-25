import React, { Component } from 'react';
import Vehicle from './Vehicle';
import NotAvailable from '../utils/NotAvailable';
import Spinner from '../utils/Spinner';

class VehiclesList extends Component {
    state = {
      error: null,
      vehicles: [],
      isLoading: true
    }

    componentDidMount() {
      this.getVehicles()
    }

    getVehicles = () => {
      const make = this.props.location.pathname.split('/')[1];
      const model = this.props.location.pathname.split('/')[2];
      fetch(`http://localhost:8080/api/vehicles?make=${make}&model=${model}`)
      .then(res => res.json())
      .then(data => this.setState({
        vehicles: data,
        isLoading: false
      }),
      (error) => {
        this.setState({
          error,
        });
      }
     )
    }

    render() {
      const { vehicles, error, isLoading } = this.state
      if (error) {
        throw error;
      } else if (isLoading){
        return <Spinner />
      } else if (vehicles.length === 0) {
        return <NotAvailable text={`No Vehicles Available`} />
      }
      return (
        <>
        <h3>List of Vehicles</h3>
        <a className="back-btn" href='/selectVehicle'>Back</a>
        <div className="vehicle-container">
          {
            vehicles.map((vehicle, id) => {
              return <Vehicle key={id} vehicle={vehicle} />
            })
          }
        </div>
        </>
      );
    }

  }

export default VehiclesList;
