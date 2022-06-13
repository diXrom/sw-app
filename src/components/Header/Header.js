import './Header.scss';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render = () => (
    <div className='header d-flex' >
      <h3>
        <NavLink to='/'> Star DB</NavLink>
      </h3>
      <ul className='d-flex'>
        <li><NavLink to='/'>People</NavLink></li>
        <li><NavLink to='planets'>Planets</NavLink></li>
        <li><NavLink to='starships'>Starships</NavLink></li>
        <li><NavLink to='login'>Login</NavLink></li>
        <li><NavLink to='secret'>Secret</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;