import {Component} from "react";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import Swapi from "../Api/Swapi";

export default class App extends Component {
    SwapiService = Swapi

    render () {
        console.log(this.SwapiService)
        return (
            <div className="bg-dark pb-5">
                <RandomPlanet />
                <PeoplePage />
                <div className="d-flex mt-2">
                    <div className="col-md-6">
                        <ItemList
                            getData={this.SwapiService.getAllPlanets}
                            onItemSelected={this.onPersonSelected}
                        />
                    </div>
                    <div className="col-md-6">
                        {/*<PersonDetails*/}
                        {/*    personId={this.state.selectedPerson}*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className="d-flex mt-2">
                    <div className="col-md-6">
                        <ItemList
                            getData={this.SwapiService.getAllStarship}
                            onItemSelected={this.onPersonSelected}
                        />
                    </div>
                    <div className="col-md-6">
                        {/*<PersonDetails*/}
                        {/*    personId={this.state.selectedPerson}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        )
    }
}