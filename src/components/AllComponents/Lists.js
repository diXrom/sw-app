import React from 'react';
import ItemList from '../ItemList';
import { DataHelp, FetchContext } from '../HocHelpers';

const childHelp = (Item, chilFn) => (props) => (
  <Item {...props}>
    {chilFn}
  </Item>
);
const createName = (item) => `${item.name}`;
const List = childHelp(ItemList, createName);

const PersonList = FetchContext(DataHelp(List, 'getAllPeople'));
const PlanetList = FetchContext(DataHelp(List, 'getAllPlanets'));
const StarshipList = FetchContext(DataHelp(List, 'getAllStarships'));
export {
  PersonList,
  PlanetList,
  StarshipList,
};
