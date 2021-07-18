import React from 'react'
import ItemList from "../ItemList";
import {
    withData,
    withSwapiService,
    compose,
    withChildFunction
} from '../HOCHelpers/'

const mapPersonMethodsToProps = (swapiService) => ({
    getData: swapiService.getAllPeople
})

const mapStarshipMethodsToProps = (swapiService) => ({
    getData: swapiService.getAllStarship
})

const mapPLanetMethodsToProps = (swapiService) => ({
    getData: swapiService.getAllPlanets
})

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>


const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
    withSwapiService(mapPLanetMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList)

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderModelAndName)
)(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList,
}