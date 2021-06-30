import Loader from "../Loader";
import {Component} from "react";

const withData = (View, getData) => {
    return class extends Component {
        state = {
            itemList: null
        }

        onListLoad = (itemList) => {
            this.setState({
                itemList
            })
        }

        componentDidMount() {
            getData()
                .then(this.onListLoad)
        }

        render() {
            const {itemList} = this.state

            if (!itemList) {
                return <Loader />
            }

            return <View {...this.props} itemList={itemList} />
        }
    }
}

export default withData