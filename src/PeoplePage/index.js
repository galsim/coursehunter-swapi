import {Component} from "react";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import Swapi from "../Api/Swapi";
import Row from "../Row";
import ErrorBoundary from "../ErrorBoundary";

export default class PeoplePage extends Component {
    SwapiService = Swapi

    state = {
        selectedPerson: 5,
    }
    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    render () {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.SwapiService.getAllPeople}
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
            />
        )

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
            />
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundary>
        )
    }
}