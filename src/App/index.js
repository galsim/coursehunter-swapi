import {Component} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {PeoplePage, StarshipPage, PlanetPage} from '../pages'
import Header from '../Header/'
import RandomPlanet from "../RandomPlanet";

import SwapiServices from "../Api/Swapi";
import TestServices from "../Api/Test";

import {SwapiServiceProvider} from "../SwapiServiceContext";

export default class App extends Component {
    state = {
        swapiServices: new SwapiServices()
    }

    onServiceChange = () => {
       this.setState(({swapiServices}) => {
           const Service = swapiServices instanceof SwapiServices ? TestServices : SwapiServices

           return {
               swapiServices: new Service()
           }
       })
    }

    render () {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiServices}>
                    <div className="bg-dark pb-5 px-3">
                        <Header
                            onServiceChange={this.onServiceChange}
                        />

                        <RandomPlanet />

                        <PeoplePage />

                        <StarshipPage />

                        <PlanetPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}