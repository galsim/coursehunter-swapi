import {Component} from "react";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorPlug from "../ErrorPlug";
import Swapi from "../Api/Swapi";

export default class PeoplePage extends Component {
    SwapiService = Swapi

    state = {
        selectedPerson: 5,
        hasError: false
    }
    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render () {

        if (this.state.hasError) {
            return <ErrorPlug />
        }
        
        return (
            <div className="d-flex">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.SwapiService.getAllPeople}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails
                        personId={this.state.selectedPerson}
                    />
                </div>
            </div>
        )
    }
}