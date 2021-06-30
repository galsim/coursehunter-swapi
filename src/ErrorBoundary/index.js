import {Component} from "react";
import ErrorPlug from "../ErrorPlug";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPlug />
        }

        return this.props.children
    }
}