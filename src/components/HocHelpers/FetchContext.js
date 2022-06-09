import { DataConsumer } from '../DataContext';
const FetchContext = (Item) => (props) => (
  <DataConsumer>
    {(data) => <Item {...props} FetchData={data} />}
  </DataConsumer>
);
export { FetchContext };