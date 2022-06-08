import React from 'react';
import ItemList from '../ItemList';
import DataHelp from '../HocHelpers';
import FetchData from '../../services/FetchData';

const getData = new FetchData();

const { getAllPeople, getAllStarships, getAllPlanets } = getData;
const childHelp = (Item, chilFn) => (props) => (
  <Item {...props}>
    {chilFn}
  </Item>
);
const createName = (item) => `${item.name}`;
const PersonList = DataHelp(childHelp(ItemList, createName), getAllPeople);
const PlanetList = DataHelp(childHelp(ItemList, createName), getAllPlanets);
const StarshipList = DataHelp(childHelp(ItemList, createName), getAllStarships);
export {
  PersonList,
  PlanetList,
  StarshipList,
};
