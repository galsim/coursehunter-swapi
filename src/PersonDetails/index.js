import {Component} from "react";
import Swapi from "../Api/Swapi";
import Loader from "../Loader";

export default class PersonDetails extends Component {
    state = {
        person: null,
        loading: true
    }

    updatePerson = async () => {
        const {personId} = this.props
        if (!personId) {
            return
        }

        this.setState({
            loading: true
        })

        await Swapi
            .getPerson(personId)
            .then( person => {
                this.setState({person})
            })

        this.setState({
            loading: false
        })
    }

    componentDidMount(prevProps, prevState, snapshot) {
        this.updatePerson()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    render() {

        if (this.state.loading) {
            return <Loader />
        }

        if (!this.state.person ) {
            return <span>Select person from list</span>
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person

        return (
            <div className="mx-2 card d-flex flex-row">
                <img
                    className="w-25"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="something"
                />

                <div className="w-75 mx-2">
                    <h4>{name}</h4>
                    <ul className="list-group-list-group-flash">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}