import React, {Component} from 'react'
import Row from "../Row";
import {StarshipDetails, StarshipList} from "../SWComponents";

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
                    <StarshipList
                        onItemSelected={this.onItemsSelected}
                    />
                }
                right={
                    <StarshipDetails
                        itemId={selectedItems}
                    />
                }
            />
        )
    }
}