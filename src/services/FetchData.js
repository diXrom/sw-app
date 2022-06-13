export default class FetchData {
  _BASE_URL = 'https://swapi.dev/api/';
  _IMG_URL = 'https://starwars-visualguide.com/assets/img/';

  getId = (data) => data.url.match(/\/([0-9]*)\/$/)[1];
  getImageURL = (id, type) => `${this._IMG_URL}${type}/${id}.jpg`;
  getData = async (url, base = this._BASE_URL) => {
    const res = await fetch(`${base}${url}`);
    if (!res.ok) throw new Error(`Could not fetch data:${res.status}`);
    return await res.json();
  };
  convertPlanet = (planet) => ({
    id: this.getId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
    img: this.getImageURL(this.getId(planet), 'planets'),
  });
  convertStarship = (starship) => ({
    id: this.getId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity,
    img: this.getImageURL(this.getId(starship), 'starships'),
  });
  convertPerson = (person) => ({
    id: this.getId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
    img: this.getImageURL(this.getId(person), 'characters'),
  });
  getAllPeople = async () => {
    const persons = await this.getData('people');
    return persons.results.map(data => this.convertPerson(data));
  };
  getAllPlanets = async () => {
    const planets = await this.getData('planets');
    return planets.results.map(data => this.convertPlanet(data));
  };
  getAllStarships = async () => {
    const starships = await this.getData('starships');
    return starships.results.map(data => this.convertStarship(data));
  };
  getPerson = async (id) => {
    const person = await this.getData(`people/${id}/`);
    return this.convertPerson(person);
  };
  getPlanet = async (id) => {
    const planet = await this.getData(`planets/${id}/`);
    return this.convertPlanet(planet);
  };
  getStarship = async (id) => {
    const starships = await this.getData(`starships/${id}`);
    return this.convertStarship(starships);
  };
}