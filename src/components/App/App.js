import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import { DataProvider } from '../DataContext';
import FetchData from '../../services/FetchData';

import './App.css';
export default class App extends Component {
  getData = new FetchData();
  render = () => (
    <React.Fragment>
      <DataProvider value={this.getData}>
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </DataProvider>
    </React.Fragment>
  );
};

