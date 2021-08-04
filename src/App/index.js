import {Component} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {
    PeoplePage,
    StarshipPage,
    PlanetPage,
    SecretPage,
    LoginPage
} from '../pages'
import Header from '../Header/'
import RandomPlanet from "../RandomPlanet";

import SwapiServices from "../Api/Swapi";
import TestServices from "../Api/Test";

import {SwapiServiceProvider} from "../SwapiServiceContext";

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import StarshipDetails from "../SWComponents/StarshipDetails";

export default class App extends Component {
    state = {
        swapiServices: new SwapiServices(),
        isLoggedIn: false
    }

    onServiceChange = () => {
       this.setState(({swapiServices}) => {
           const Service = swapiServices instanceof SwapiServices
               ? TestServices
               : SwapiServices

           return {
               swapiServices: new Service()
           }
       })
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render () {
        const {isLoggedIn} = this.state
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
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    render={() => {
                                        return (<h2 className="text-white">Hello, world!</h2>)
                                    }} />
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

                                <Route
                                    path='/login'
                                    render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}
                                />
                                <Route
                                    path='/secret'
                                    render={() => <SecretPage isLoggedIn={isLoggedIn}  />}
                                />

                                <Route render={() => <p className='text-white text-center'>This page isn't find!</p>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}