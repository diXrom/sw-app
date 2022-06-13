import React, { Component } from 'react';
import { PlanetList, PlanetDetails } from '../AllComponents';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';

export class PlanetsPage extends Component {
  state = { person: null };
  getPerson = (person) => this.setState({ person });
  render() {
    const { person } = this.state;
    return (
      <ErrorBoundry>
        <Row 
          left={<PlanetList getPerson={this.getPerson} />} 
          right={<PlanetDetails item={person} />} 
        />
      </ErrorBoundry>
    );
  }
}
