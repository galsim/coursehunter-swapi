import React from 'react'
import Row from "../Row";
import {PlanetDetails, PlanetList} from "../SWComponents";
import {withRouter} from 'react-router-dom'

const PeoplePage = ({history, match}) => {
    return (
        <Row
            left={
                <PlanetList
                    onItemSelected={({itemId}) => history.push(itemId)}
                />
            }
            right={
                <PlanetDetails
                    itemId={match.params.id}
                />
            }
        />
    )
}

export default withRouter(PeoplePage)