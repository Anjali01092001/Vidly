import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {  Switch, Route, Redirect } from "react-router-dom";
import Movies from './Components/Movies';
import Customers from './Components/Customers';
import Rentals from './Components/Rentals';
import Loginform from './Components/Loginform';
import Registerform from './Components/Registerform';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/loginform" component={Loginform} />
            <Route path="/registerform" component={Registerform} />
            <Redirect from="/" exact to="/movies" />
          </Switch>
      </>
    )
  }
}
export default App;