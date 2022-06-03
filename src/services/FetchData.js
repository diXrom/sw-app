export default class FetchData {
  _BASE_URL = 'https://swapi.dev/api/';

  async getData(url) {
    const res = await fetch(`${this._BASE_URL}${url}`);
    if (!res.ok) throw new Error(`Could not fetch data:${res.status}`);
    const data = await res.json();
    return data;
  }
  async getAllPeople() {
    const persons = await this.getData('people');
    return persons;
  }
  async getAllPlanets() {
    const planets = await this.getData('planets');
    return planets.results;
  }
  async getAllStarships() {
    const starships = await this.getData('starships');
    return starships.results;
  }
  getPerson(id) { return this.getData(`people/${id}/`); }
  getPlanet(id) { return this.getData(`planets/${id}/`); }
  getStarship(id) { return this.getData(`starships/${id}/`); }
}