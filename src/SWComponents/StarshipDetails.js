import ItemDetails, {Record} from "../ItemDetails";
import React from "react";
import {withSwapiService} from "../HOCHelpers";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='model' label='Model' />
            <Record field='length' label='Length' />
            <Record field='costInCredits' label='Cost' />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
})

export default withSwapiService(StarshipDetails, mapMethodsToProps)