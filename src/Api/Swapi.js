import ApiClass from "./index";

class SwapiApi extends ApiClass {
    constructor() {
        super('https://swapi.dev/api/');
    }

    getAllPeople = async () => {
        const res = await this.getResponse('people/')
        return res.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        const res = await this.getResponse(`people/${id}`)
        return this._transformPerson(res)
    }

    getPlanet = async (id) => {
        const res = await this.getResponse(`planets/${id}`)
        return this._transformPlanet(res)
    }

    getAllPlanets = async () => {
        const res = await this.getResponse(`planets/`)
        return res.results.map(this._transformPlanet)
    }

    getStarship = async (id) => {
        const res = await this.getResponse(`starships/${id}`)
        return this._transformStarship(res)
    }

    getAllStarship = async () => {
        const res =  await this.getResponse(`starships/`)
        return res.results.map(this._transformStarship)
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            constInCredits: starship.constInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCopacity: starship.cargoCopacity,
        }
    }

    _extractId(url) {
        const idRegExp = /\/([0-9]*)\/$/
        return url.match(idRegExp)[1]
    }
}

const Swapi = new SwapiApi()

export default Swapi