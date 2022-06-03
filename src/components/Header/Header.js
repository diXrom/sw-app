import './Header.css';

const Header = () => {
  return (
    <div className='header d-flex'>
      <h3>
        <a href='#None'>
          Star DB
        </a>
      </h3>
      <ul className='d-flex'>
        <li>
          <a href='#None'>People</a>
        </li>
        <li>
          <a href='#None'>Planets</a>
        </li>
        <li>
          <a href='#None'>Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;