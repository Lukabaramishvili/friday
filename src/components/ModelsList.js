import React, { Component } from 'react';
import Model from './Model';
import NotAvailable from '../utils/NotAvailable';
import Spinner from '../utils/Spinner';

class ModelsList extends Component {

  state = {
    error: null,
    models: [],
    isLoading: true
  }

  componentDidMount() {
    this.getModels()
  }

  getModels = () => {
    fetch(`http://localhost:8080/api/models?make=${this.props.make}`)
    .then(res => res.json())
    .then(data => this.setState({
      models: data,
      isLoading: false
    }),
    (error) => {
      this.setState({
        error,
      });
    }
   )
  }

  filteredModels = () => this.state.models.filter(model => {
      return model.toLowerCase().includes(this.props.inputText.toLowerCase())
    })

  render() {
    const { make } = this.props
    const { error, isLoading } = this.state
    const models = this.filteredModels()
    if (error) {
      throw error
    } else if (isLoading){
      return <Spinner />
    }else if (models.length === 0) {
      return <NotAvailable text={`Models Not Available for ${make}`}/>
    } else {
    return (
      <div>
      <h3>List of Models</h3>
        <ul>
        {
          models.map((model, id) => {
            return <Model key={id} model={model} make={make}/>
          })
        }
      </ul> <br />
      <a className="back-btn" href='/selectVehicle'>Back</a>
      </div>
    );
   }
 }
}

export default ModelsList;
