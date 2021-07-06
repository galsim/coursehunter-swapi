import ItemDetails, {Record} from "../ItemDetails";
import React from "react";
import {withSwapiService} from '../HOCHelpers/'

const PersonDetails = ({itemId, swapiService}) => {
    const {getPerson, getPersonImage} = swapiService
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye color' />
        </ItemDetails>
    )
}

export default withSwapiService(PersonDetails)