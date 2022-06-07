import React, { Component } from 'react';

import ItemList from '../ItemList';
import ItemDetails, { Record } from '../ItemDetails';
import FetchData from '../../services/FetchData';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import './PeoplePage.css';

export default class PeoplePage extends Component {

  getData = new FetchData();
  state = { selectedPerson: null };
  getPerson = (person) => this.setState({ selectedPerson: person });
  render() {
    const personList = (
      <ItemList getAllData={this.getData.getAllPeople} getPerson={this.getPerson}>
        {(item) => `${item.name} - ${item.birthYear}`}
      </ItemList>);
    const personDetails = (
      <ItemDetails item={this.state.selectedPerson} getData={this.getData.getPerson}>
        <Record field={'gender'} label='Gender' />
        <Record field={'birthYear'} label='Birth Year' />
        <Record field={'eyeColor'} label='Eye Color' />
      </ItemDetails>);
    return (
      <ErrorBoundry>
        <Row left={personList} right={personDetails} />
      </ErrorBoundry>);
  }
}
