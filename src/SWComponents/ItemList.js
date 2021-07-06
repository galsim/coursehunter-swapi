import React from 'react'
import ItemList from "../ItemList";
import {withData} from '../HOCHelpers/'
import SwapiServices from "../Api/Swapi";
import {SwapiServiceConsumer} from "../SwapiServiceContext";

const Swapi = new SwapiServices()

const {
    getAllPeople,
    getAllStarship,
    getAllPlanets
} = Swapi

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const PersonList = withData(
    withChildFunction(
        ItemList,
    ({name}) => <span>{name}</span>
    ), getAllPeople)
const PlanetList = withData(
    withChildFunction(
        ItemList,
    ({name}) => <span>{name}</span>
    ), getAllPlanets)
const StarshipList = withData(
    withChildFunction(
        ItemList,
        renderModelAndName
    ), getAllStarship)

export {
    PersonList,
    PlanetList,
    StarshipList,
}