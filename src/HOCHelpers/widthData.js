import Loader from "../Loader";
import {Component} from "react";

const withData = (View) => {
    return class extends Component {
        state = {
            itemList: null
        }

        update = () => {
            this.props.getData()
                .then(this.onListLoad)
        }

        onListLoad = (itemList) => {
            this.setState({
                itemList
            })
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update()
            }
        }

        componentDidMount() {
            this.update()
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