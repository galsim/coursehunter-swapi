import {Component} from "react";
import Loader from "../Loader";

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    onListLoad = (itemList) => {
        this.setState({
            itemList
        })
    }

    componentDidMount() {
        const {getData} = this.props
        getData()
            .then(this.onListLoad)
    }

    renderItems(arr) {
        return arr.map((item) => {
            const id = item.id

            const label = this.props.renderItem(item)

            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state

        if (!itemList) {
            return <Loader />
        }

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group mx-2">
                {items}
            </ul>
        )
    }
}