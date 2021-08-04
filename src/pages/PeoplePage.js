import React from 'react'
import {withRouter} from 'react-router-dom'
import Row from "../Row";
import {PersonDetails, PersonList} from "../SWComponents";

const PeoplePage = ({history, match}) => {
    return (
        <Row
            left={
                <PersonList
                    onItemSelected={({itemId}) => history.push(itemId)}
                />
            }
            right={
                <PersonDetails
                    itemId={match.params.id}
                />
            }
        />
    )
}

export default withRouter(PeoplePage)