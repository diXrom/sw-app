import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';


import './App.css';

export default class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage   />
      </div>
    );
  };
};

