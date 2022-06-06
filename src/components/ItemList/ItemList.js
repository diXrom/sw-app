import React, { Component } from 'react';
import FetchData from '../../services/FetchData';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './ItemList.css';

export default class ItemList extends Component {
  getData = new FetchData();
  state = {
    peopleData: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchPeople();
  }
  fetchPeople = async () => {
    const res = await this.getData
      .getAllPeople()
      .catch(() => this.setState({ error: true }));
    this.setState({ peopleData: res, loading: false });
  };
  personList = (arr) => arr.map((item) => (
    <li className='list-group-item'
      onClick={() => this.props.getPerson(item)}
      key={item.id}>
      {item.name}
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
