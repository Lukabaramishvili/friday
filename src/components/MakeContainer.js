import React, { Component } from 'react';
import MakesList from './MakesList';
import ModelsList from './ModelsList';
import Search from './Search';
import Spinner from '../utils/Spinner';

const baseURL = `http://localhost:8080/api/makes`

class MainContainer extends Component {

    state = {
      error: null,
      makes: [],
      make: '',
      isLoading: true,
      inputText: ''
    }

    componentDidMount() {
      this.getMakes()
    }

    getMakes = () => {
      fetch(baseURL)
      .then(res => res.json())
      .then(data => this.setState({
        makes: data,
        isLoading: false
      }),
      (error) => {
        this.setState({
          isLoading: false,
          error
        });
      }
    )
  }

  handleInputChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleSelect = (selectedMake) => {
    this.setState({
      make: selectedMake,
      inputText: ''
    })
  }

  filteredMakes = () => this.state.makes.filter(make => {
      return make.toLowerCase().includes(this.state.inputText.toLowerCase())
    })

  render() {
    const { error, isLoading, inputText, make } = this.state
    if (error) {
      throw error
    } else if (isLoading) {
      return <Spinner />
    } else {
      return (
        <div>
          <form className="car-form">
          <h3 className="title-text">Find Your Car</h3>
          <Search handleInputChange={this.handleInputChange} inputText={inputText}/>
          {
            make === '' ?
            <MakesList makes={this.filteredMakes()} handleSelect={this.handleSelect}/> :
            <ModelsList make={make} inputText={inputText}/>
          }
          </form>
        </div>
      );
    }
  }
}

export default MainContainer;
