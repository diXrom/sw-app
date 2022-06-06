import React, { Component } from 'react';
import FetchData from '../../services/FetchData';
import Spinner from '../Spinner';
import './PersonDetails.css';

export default class PersonDetails extends Component {
  getData = new FetchData();
  state = { person: null, loading: false };
  componentDidMount() {
    this.getData.getPerson(1).then(data => this.setState({ person: data, loading: true }));
  }
  componentDidUpdate(prevProps) {
    if (this.props.person === prevProps.person) return;
    this.setState({ person: this.props.person });
  }
  render() {
    if (!this.state.loading) return <Spinner />;
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div className='person-details card'>
        <img className='person-image'
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt='Starwars' />
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Gender</span>
              <span>{gender}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
