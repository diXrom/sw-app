import React, { Component } from 'react';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './ItemList.css';

export default class ItemList extends Component {
  state = {
    peopleData: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchPeople();
  }
  fetchPeople = async () => {
    const { getAllData } = this.props;
    const data = await getAllData().catch(() => this.setState({ error: true }));
    this.setState({ peopleData: data, loading: false });
  };
  personList = (arr) => arr.map((item) => (
    <li className='list-group-item'
      onClick={() => this.props.getPerson(item)}
      key={item.id}>
      {this.props.children(item)}
    </li>
  ));

  render() {
    const { peopleData, loading, error } = this.state;
    const content = loading ? <Spinner /> : this.personList(peopleData);
    return (
      <ul className='item-list list-group'>
        {error ? <ErrorIndicator /> : content}
      </ul>
    );
  }
}
