import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={BeerDetails}  />


        <Route exact path="/" component={HomePage} />




      </Switch>
  
    </div>
  );
}

export default App;
