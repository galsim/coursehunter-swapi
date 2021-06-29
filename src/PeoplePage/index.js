import {Component} from "react";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorPlug from "../ErrorPlug";
import Swapi from "../Api/Swapi";
import Row from '../Row/'
import ErrorBoundary from '../ErrorBoundary'

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
        >
            {
                ({name, gender, birthYear}) => `${name} (${gender} ${birthYear })}`
            }
        </ItemList>
        )

        const personDetails = (<PersonDetails
            personId={this.state.selectedPerson}
        />)
        
        return (
            <ErrorBoundary>
                <Row
                    left={itemList}
                    right={personDetails}
                />
            </ErrorBoundary>
        )
    }
}