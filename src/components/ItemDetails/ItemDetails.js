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
export default class Details extends Component {
  state = { item: null, loading: false };
  componentDidMount() {
    this.props.getData(11)
      .then(data => this.setState({ item: data, loading: true }));
  }
  componentDidUpdate(prevProps) {
    if (this.props.item === prevProps.item) return;
    this.setState({ item: this.props.item });
  }
  render() {
    if (!this.state.loading) return <Spinner />;
    const { item } = this.state;
    return (
      <div className='item-details card'>
        <img className='item-image'
          src={item.img}
          alt='Starwars' />
        <div className='card-body'>
          <h4>{item.name}</h4>
          <ul className='list-group list-group-flush'>
            {React.Children.map(
              this.props.children,
              (child) => React.cloneElement(child, { item })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
