import React from 'react';

export default (props) => {
  const { handleInputChange, inputText } = props
  return (
    <div>
      <input onChange={handleInputChange} value={inputText} type="text" className="search" placeholder="search your car..." />
    </div>
  );
}
