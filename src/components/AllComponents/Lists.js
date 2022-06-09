import ItemList from '../ItemList';
import { DataHelp, FetchContext, Compose, ChildHelp } from '../HocHelpers';

const createName = (item) => `${item.name}`;
const List = ChildHelp(ItemList, createName);
const PersonList = Compose(FetchContext, DataHelp('getAllPeople'))(List);
const PlanetList = Compose(FetchContext, DataHelp('getAllPlanets'))(List);
const StarshipList = Compose(FetchContext, DataHelp('getAllStarships'))(List);
export {
  PersonList,
  PlanetList,
  StarshipList,
};
