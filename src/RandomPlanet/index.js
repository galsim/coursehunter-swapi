import React, {Component} from "react";
import Loader from '../Loader/'
import ErrorPlug from "../ErrorPlug";
import Swapi from "../Api/Swapi";

export default class RandomPlanet extends Component {
    interval = null

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 2500)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    state = {
        planet: {},
        loading: true,
        error: false
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 3)
        Swapi
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {

        const {planet, loading, error} = this.state

        const hasData = !(error || loading)
        const spinner = loading ? <Loader /> : null
        const content = hasData ? <PlanetView planet={planet} /> : null
        const errorMessage = error ? <ErrorPlug /> : null
        return (
            <div className="random-planet jumbotron rounded d-flex justify-content-center py-2 rounded">
                {spinner}
                {content}
                {errorMessage}
            </div>
        )
    }
}

const PlanetView = (planet) => {
    const {planet: {population, rotationPeriod, diameter, name, id}} = planet
    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="rounded planet-image mx-2 w-25"/>
            <div className="mx-2 w-75 font-weight-bold">
                <h4 className="text-white">{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}