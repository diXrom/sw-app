import React, { Component } from 'react';
import FetchData from '../../services/FetchData';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import RenderPlanet from './RenderPlanet';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };
  getData = new FetchData();
  componentDidMount() {
    this.fetchPlanet();
    this.timerID = setInterval(this.fetchPlanet, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  fetchPlanet = async () => {
    const id = Math.round(Math.random() * 17) + 2;
    const res = await this.getData
      .getPlanet(id)
      .catch(() => this.setState({ error: true }));
    this.setState({ planet: res, loading: false });
  };
  render() {
    const { planet, loading, error } = this.state;
    const content = loading ? <Spinner /> : <RenderPlanet planet={planet} />;
    return (
      <div className='random-planet jumbotron rounded'>
        {error ? <ErrorIndicator /> : content}
      </div>);
  }
}
