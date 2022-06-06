import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';

export default class App extends Component {
  state = {
    selectedPerson: null,
  };
  getPerson = (person) => this.setState({ selectedPerson: person });
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList getPerson={this.getPerson} />
          </div>
          <div className='col-md-6'>
            <PersonDetails person={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  };
};

