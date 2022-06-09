import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorBoundry from '../ErrorBoundry';

const DataHelp = (dataName) => (View) => {
  return class extends Component {
    state = { peopleData: null };
    fetch = this.props.FetchData;
    async componentDidMount() {
      const data = await this.fetch[dataName]();
      this.props.getPerson(data[0]);
      this.setState({ peopleData: data });
    }
    render() {
      const { peopleData } = this.state;
      if (!peopleData) return <Spinner />;
      return (
        <ErrorBoundry>
          <View {...this.props} data={peopleData} />
        </ErrorBoundry>
      );
    }
  };
};
export { DataHelp };
