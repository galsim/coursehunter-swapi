import {Component} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {PeoplePage, StarshipPage, PlanetPage} from '../pages'
import Header from '../Header/'
import RandomPlanet from "../RandomPlanet";

import SwapiServices from "../Api/Swapi";
import TestServices from "../Api/Test";

import {SwapiServiceProvider} from "../SwapiServiceContext";

import { BrowserRouter as Router, Route } from "react-router-dom";
import StarshipDetails from "../SWComponents/StarshipDetails";

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
                    <Router>
                        <div className="bg-dark pb-5 px-3">
                            <Header
                                onServiceChange={this.onServiceChange}
                            />

                            <RandomPlanet
                                updateInterval={2500}
                            />

                            <Route path="/" exact render={() => <h2 className="text-white">Hello, world!</h2>} />
                            <Route path='/people/:id?' component={PeoplePage} />
                            <Route path='/planets/:id?' component={PlanetPage} />
                            <Route
                                path='/starship/'
                                exact
                                component={StarshipPage}
                            />
                            <Route
                                path='/starship/:id'
                                render={({match}) => <StarshipDetails itemId={+match.params.id} />}
                            />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}