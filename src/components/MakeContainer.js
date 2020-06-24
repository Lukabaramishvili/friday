import React, { useState, useEffect } from 'react';
import MakesList from './MakesList';
import ModelsList from './ModelsList';
import Search from './Search';
import Spinner from '../utils/Spinner';

const baseURL = `http://localhost:8080/api/makes`

const MainContainer = () => {

  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState('');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMakes()
  }, [])

  async function getMakes() {
    const res = await fetch(baseURL);
    res
    .json()
    .then(data => setMakes(data))
    .then(loading => setIsLoading(false))
    .catch(err => setError(err));
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  };

  const handleSelect = (selectedMake) => {
    setMake(selectedMake)
    setInputText('')
  };

  const filteredMakes = () => makes.filter(make => {
    return make.toLowerCase().includes(inputText.toLowerCase())
  })

  if (error) {
    throw error
  } else if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div>
      <form className="car-form">
      <h3 className="title-text">Find Your Car</h3>
      <Search handleInputChange={handleInputChange} inputText={inputText}/>
      {
        make === '' ?
        <MakesList makes={filteredMakes()} handleSelect={handleSelect}/> :
        <ModelsList make={make} inputText={inputText}/>
      }
      </form>
    </div>
    );
  }
}

export default MainContainer;
