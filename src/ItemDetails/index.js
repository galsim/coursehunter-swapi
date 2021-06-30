import {Component} from "react";
import Loader from "../Loader";

const Record = ({field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{field}</span>
        </li>
    )
}

export default class itemDetails extends Component {
    state = {
        item: null,
        image: null,
        loading: true,
        throwError: false
    }

    updateItem = async () => {
        const {itemId, getData, getImageUrl} = this.props
        if (!itemId) {
            return
        }

        this.setState({
            loading: true
        })

        getData(itemId)
            .then( item => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })

        this.setState({
            loading: false
        })
    }

    throwError = () => {
        this.setState({
            throwError: true
        })
    }

    componentDidMount(prevProps, prevState, snapshot) {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    render() {

        if (this.state.throwError) {
            throw new Error('Fuck you')
        }

        if (this.state.loading) {
            return <Loader />
        }

        if (!this.state.item ) {
            return <span>Select person from list</span>
        }

        const { item: { name, gender, birthYear, eyeColor}, image } = this.state

        return (
            <div className="mx-2 card d-flex flex-row">
                <img
                    className="w-25"
                    src={image}
                    alt="something"
                />

                <div className="w-75 mx-2">
                    <h4>{name}</h4>
                    <ul className="list-group-list-group-flash">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return child
                            })
                        }
                    </ul>
                    <button
                        className="btn btn-outline btn-outline-danger"
                        onClick={this.throwError}
                    >Вызвать ошибку</button>
                </div>
            </div>
        )
    }
}

export {
    Record
}