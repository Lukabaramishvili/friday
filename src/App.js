import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './utils/NavBar'
import Home from './Home'
import MakeContainer from './components/MakeContainer'
import VehiclesList from './components/VehiclesList'
import ErrorBoundary from './components/ErrorBoundary'
import NoMatchPage from './utils/NoMatchPage'

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/selectVehicle" component={MakeContainer} />
            <Route path="/:make/:model/vehicle" component={VehiclesList} />
            <Route component={NoMatchPage} />
          </Switch>
        </ErrorBoundary>
      </Router>
    );
  }

}

export default App;
