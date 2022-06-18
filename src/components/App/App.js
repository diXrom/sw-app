import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import FetchData from '../../services/FetchData';
import { Ship } from '../AllComponents';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../Pages';
import { DataProvider } from '../DataContext';

import './App.css';
export default class App extends Component {
  state = { isLogin: false };
  getData = new FetchData();
  onLogin = () => this.setState({ isLogin: true });
  render = () => (
    // <>
    <React.Fragment>
      <DataProvider value={this.getData}>
        <Router>
          <Header />
          <RandomPlanet />
          <Routes>
            <Route path='*' element={<h2>Page not found</h2>} />
            <Route path='/' element={<PeoplePage />} />
            <Route path='/planets' element={<PlanetsPage />} />
            <Route path='/starships' element={<StarshipsPage />} />
            <Route path='/secret' element={<SecretPage login={this.state.isLogin} />} />
            <Route path='/login'
              element={<LoginPage login={this.state.isLogin} onLogin={this.onLogin} />} />
            <Route path='/starships/:id'
              element={<Ship getData={this.getData.getStarship} />} />
          </Routes>
        </Router>
      </DataProvider>
    </React.Fragment>
    // < />
  );
};

// planets/ руты в объект или enum в TS
