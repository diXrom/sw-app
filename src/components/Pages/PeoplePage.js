import React, { Component } from 'react';
import { PersonList, PersonDetails } from '../AllComponents';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';

export class PeoplePage extends Component {
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
