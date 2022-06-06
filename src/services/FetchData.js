export default class FetchData {
  _BASE_URL = 'https://swapi.dev/api/';

  async getData(url) {
    const res = await fetch(`${this._BASE_URL}${url}`);
    if (!res.ok) throw new Error(`Could not fetch data:${res.status}`);
    return await res.json();
  }
  async getAllPeople() {
    const persons = await this.getData('people');
    return persons.results.map(data => this.convertPerson(data));
  }
  async getAllPlanets() {
    const planets = await this.getData('planets');
    return planets.results.map(data => this.convertPlanet(data));
  }
  async getAllStarships() {
    const starships = await this.getData('starships');
    return starships.results.map(data => this.convertStarship(data));
  }
  async getPerson(id) {
    const person = await this.getData(`people/${id}/`);
    return this.convertPerson(person);
  }
  async getPlanet(id) {
    const planet = await this.getData(`planets/${id}/`);
    return this.convertPlanet(planet);
  }
  async getStarship(id) {
    const starships = await this.getData(`starships/${id}/`);
    return this.convertStarship(starships);
  }
  convertPlanet(planet) {
    return {
      id: this.getId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }
  convertStarship(starship) {
    return {
      id: this.getId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }
  convertPerson(person) {
    return {
      id: this.getId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  }
  getId(data) { return data.url.match(/\/([0-9]*)\/$/)[1]; }
}