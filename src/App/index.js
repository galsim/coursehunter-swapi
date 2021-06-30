import {Component} from "react";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import ItemDetails, {Record} from '../ItemDetails'
import PersonDetails from "../ItemDetails";
import Swapi from "../Api/Swapi";
import Row from "../Row";

export default class App extends Component {
    SwapiService = Swapi

    render () {
        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage
        } = this.SwapiService
        const personDetails = (
            <ItemDetails
                getData={getPerson}
                getImageUrl={getPersonImage}
                itemId={11}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="birthYear" label="Birth Year" />
            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        )
        return (
            <div className="bg-dark pb-5">
                <Row
                    left={personDetails}
                    right={starshipDetails}
                />
                <RandomPlanet />
                {/*<PeoplePage />*/}
                <div className="d-flex mt-2">
                    <div className="col-md-6">
                        <ItemList
                            getData={this.SwapiService.getAllPlanets}
                            renderItem={(item) => item.name}
                            onItemSelected={this.onPersonSelected}
                        />
                    </div>
                    <div className="col-md-6">
                        {/*<ItemDetails*/}
                        {/*    personId={this.state.selectedPerson}*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className="d-flex mt-2">
                    <div className="col-md-6">
                        <ItemList
                            getData={this.SwapiService.getAllStarship}
                            onItemSelected={this.onPersonSelected}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        {/*<ItemDetails*/}
                        {/*    personId={this.state.selectedPerson}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        )
    }
}