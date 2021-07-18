import React from 'react'
import ItemList from "../ItemList";
import {withData, withSwapiService} from '../HOCHelpers/'

const withChildFunction = (fn) => (Wrapped) => {
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

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const PersonList = withSwapiService(
    mapPersonMethodsToProps
)(
    withData(
        withChildFunction(
            renderName
        )(
            ItemList,
        )
    ),

)
const PlanetList = withSwapiService(mapPLanetMethodsToProps)(
    withData(
        withChildFunction(
            renderName
        )(
            ItemList
        )
    ),
)
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
    withData(
        withChildFunction(
            renderModelAndName
        )(
            ItemList,
        )
    ),
)

export {
    PersonList,
    PlanetList,
    StarshipList,
}