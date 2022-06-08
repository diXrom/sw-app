import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';

const PersonDetails = ({ item }) => {
  return (
    <ItemDetails item={item}>
      <Record item={item} field={'gender'} label='Gender' />
      <Record item={item} field={'birthYear'} label='Birth Year' />
      <Record item={item} field={'eyeColor'} label='Eye Color' />
    </ItemDetails>
  );
};
const PlanetDetails = ({ item }) => (
  <ItemDetails item={item}>
    <Record item={item} field={'population'} label='Population' />
    <Record item={item} field={'rotationPeriod'} label='Rotation Period' />
    <Record item={item} field={'diameter'} label='Diameter' />
  </ItemDetails>
);

const StarshipDetails = ({ item }) => (
  <ItemDetails item={item}>
    <Record item={item} field={'model'} label='Model' />
    <Record item={item} field={'length'} label='Length' />
    <Record item={item} field={'costInCredits'} label='Cost' />
  </ItemDetails>
);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
