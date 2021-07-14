import Loader from "../Loader";
import {Component} from "react";
import ErrorPlug from "../ErrorPlug";

const withData = (View) => {
    return class extends Component {
        state = {
            itemList: null,
            loading: true,
            error: false
        }

        update = async () => {
            this.setState({loading: true})

            await this.props.getData()
                .then(this.onListLoad)
                .catch(() => this.setState({error: true}))

            this.setState({loading: false})
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
            const {itemList, loading, error} = this.state

            if (loading) {
                return <Loader />
            }

            if (error) {
                return <ErrorPlug />
            }

            return <View {...this.props} itemList={itemList} />
        }
    }
}

export default withData