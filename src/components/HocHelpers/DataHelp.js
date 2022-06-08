import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorBoundry from '../ErrorBoundry';

const DataHelp = (View, getData) => {
  return class extends Component {
    state = { peopleData: null };
    async componentDidMount() {
      const data = await getData();
      
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

export default DataHelp;
