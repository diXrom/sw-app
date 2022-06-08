import React, { Component } from 'react';
import Spinner from '../Spinner';
import './ItemDetails.css';

const Record = ({ item, field, label }) => (
  <li className='list-group-item'>
    <span className='term'>{label}</span>
    <span>{item[field]}</span>
  </li>
);
export { Record };
export default class ItemDetails extends Component {
  state = { item: null};
  componentDidUpdate(prevProps) {
    if (this.props.item === prevProps.item) return;
    this.setState({ item: this.props.item });
  }
  render() {
    if (!this.state.item) return <Spinner />;
    const { item } = this.state;
    return (
      <div className='item-details card'>
        <img className='item-image'
          src={item.img}
          alt='Starwars' />
        <div className='card-body'>
          <h4>{item.name}</h4>
          <ul className='list-group list-group-flush'>
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }
}
