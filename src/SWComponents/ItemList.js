import React from 'react'
import ItemList from "../ItemList";
import {withData, withSwapiService} from '../HOCHelpers/'

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const mapPersonMethodsToProps = (swapiService) => ({
    getData: swapiService.getAllPeople
})

const mapStarshipMethodsToProps = (swapiService) => ({
    getData: swapiService.getAllStarship
})

const mapPLanetMethodsToProps = (swapiService) => ({
    getData: swapiService.getAllPlanets
})

const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const PersonList = withSwapiService(withData(
    withChildFunction(
        ItemList,
    ({name}) => <span>{name}</span>
    )), mapPersonMethodsToProps)
const PlanetList = withSwapiService(withData(
    withChildFunction(
        ItemList,
    ({name}) => <span>{name}</span>
    )), mapStarshipMethodsToProps)
const StarshipList = withSwapiService(withData(
    withChildFunction(
        ItemList,
        renderModelAndName
    )), mapPLanetMethodsToProps)

export {
    PersonList,
    PlanetList,
    StarshipList,
}