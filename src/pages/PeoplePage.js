import React, {Component} from 'react'
import Row from "../Row";
import {PersonDetails, PersonList} from "../SWComponents";

export default class PeoplePage extends Component {
    state = {
        selectedItems: 11
    }

    onItemsSelected = (selectedItems) => {
        this.setState({
            selectedItems
        })
    }

    render () {
        const {selectedItems} = this.state
        return (
            <Row
                left={
                    <PersonList
                        onItemSelected={this.onItemsSelected}
                    />
                }
                right={
                    <PersonDetails
                        itemId={selectedItems}
                    />
                }
            />
        )
    }
}