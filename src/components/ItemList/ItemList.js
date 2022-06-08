import './ItemList.css';
const createList = ({ data, getPerson, children }) => data.map((item) => (
  <li className='list-group-item'
    onClick={() => getPerson(item)}
    key={item.id}>
    {children(item)}
  </li>
));
const ItemList = (props) => {
  return (
    <ul className='item-list list-group'>
      {createList(props)}
    </ul>
  );

};
export default ItemList;