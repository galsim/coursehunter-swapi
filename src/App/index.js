import {Component} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../SWComponents";

import SwapiServices from "../Api/Swapi";
import {SwapiServiceProvider} from "../SwapiServiceContext";

export default class App extends Component {
    swapiServices = new SwapiServices()

    render () {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiServices}>
                    <div className="bg-dark pb-5">

                        <PersonDetails
                            itemId={11}
                        />
                        <StarshipDetails
                            itemId={5}
                        />
                        <PlanetDetails
                            itemId={2}
                        />

                        <PersonList />
                        <StarshipList />
                        <PlanetList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}