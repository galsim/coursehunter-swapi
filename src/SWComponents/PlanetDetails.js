import ItemDetails, {Record} from "../ItemDetails";
import React from "react";
import {withSwapiService} from "../HOCHelpers";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
})

export default withSwapiService(mapMethodsToProps)(PlanetDetails)