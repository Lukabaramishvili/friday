import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
     });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="simple-container">
          <p className="error-text">503 : Looks like a mayday situation</p>
          <p className="error-text">Please REFRESH the page</p>
          <a href='/selectVehicle' className="a-btn">Reload </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
