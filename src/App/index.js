import {Component} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../SWComponents";
import Header from '../Header/'

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

           console.log('switched to ' + Service.name)

           return {
               swapiServices: new Service()
           }
       })
    }

    render () {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiServices}>
                    <div className="bg-dark pb-5">
                        <Header
                            onServiceChange={this.onServiceChange}
                        />
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