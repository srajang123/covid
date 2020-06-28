import React from 'react';
import {Link,Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import $ from'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Header from './Components/Header';
import Countries from './Components/Countries';
import World from './Components/World';
import About from './Components/About';

function App() {
  return (
    <div className="Covid-App">
      <Header/>
      <Router>
      <Switch>
        <Route path='/world'><World/></Route>
        <Route path='/countries'><Countries/></Route>
        <Route path='/about'><About/></Route>
      </Switch> 
      </Router>
    </div>
  );
}

export default App;
