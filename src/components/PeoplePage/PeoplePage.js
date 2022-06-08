import React, { Component } from 'react';

import { PersonList, PersonDetails } from '../AllComponents';
import FetchData from '../../services/FetchData';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import './PeoplePage.css';

export default class PeoplePage extends Component {
  getData = new FetchData();
  state = { person: null };
  getPerson = (person) => this.setState({ person });
  render() {
    const { person } = this.state;
    return (
      <ErrorBoundry>
        <Row 
          left={<PersonList getPerson={this.getPerson} />} 
          right={<PersonDetails item={person} />} 
        />
      </ErrorBoundry>
    );
  }
}
