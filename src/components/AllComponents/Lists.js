import ItemList from '../ItemList';
import { DataHelp, FetchContext, Compose, ChildHelp } from '../HocHelpers';

const createName = (item) => `${item.name}`;
const List = ChildHelp(ItemList, createName);

// а почему нельзя контекст объявить в самих компонентах,
// + поч испольтзовать методы апи явно, а не прокидывать идентификатору через пропу и потом
// поч твой вариант лучше ?
const PersonList = Compose(FetchContext, DataHelp('getAllPeople'))(List);
const PlanetList = Compose(FetchContext, DataHelp('getAllPlanets'))(List);
const StarshipList = Compose(FetchContext, DataHelp('getAllStarships'))(List);
export {
  PersonList,
  PlanetList,
  StarshipList,
};
