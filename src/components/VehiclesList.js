import React, { useState, useEffect } from 'react';
import Vehicle from './Vehicle';
import NotAvailable from '../utils/NotAvailable';
import Spinner from '../utils/Spinner';

const VehiclesList = (props) => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    async function fetchData() {
      const make = props.location.pathname.split('/')[1];
      const model = props.location.pathname.split('/')[2];
      const res = await fetch(`http://localhost:8080/api/vehicles?make=${make}&model=${model}`);
      res
      .json()
      .then(data => setVehicles(data))
      .then(loading => setIsLoading(false))
      .catch(err => setError(err));
    }

    useEffect(() => {
      fetchData()
    }, []);


      if (error) {
        throw error;
      } else if (isLoading){
        return <Spinner />
      } else if (vehicles.length === 0) {
        return <NotAvailable text={`No Vehicles Available`} />
      }
      return (
        <>
        <h3 className="vehicle-title">Vehicles</h3>
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

export default VehiclesList;
