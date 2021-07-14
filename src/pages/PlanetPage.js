import React, {Component} from 'react'
import Row from "../Row";
import {PlanetDetails, PlanetList} from "../SWComponents";

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
                    <PlanetList
                        onItemSelected={this.onItemsSelected}
                    />
                }
                right={
                    <PlanetDetails
                        itemId={selectedItems}
                    />
                }
            />
        )
    }
}