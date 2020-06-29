import React,{useEffect} from 'react';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import $ from'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import logo from './assets/logo.png';
import Header from './Components/Header';
import Countries from './Components/Countries';
import Country from './Components/Country';
import World from './Components/World';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  useEffect(() => {

  })
  return (
    <div className="Covid-App">
      <Header/>
      <Router>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/world'><World/></Route>
        <Route path='/countries'><Countries/></Route>
        <Route path='/country'><Country/></Route>
        <Route path='/about'><About/></Route>
      </Switch> 
      </Router>
    </div>
  );
}

export default App;
