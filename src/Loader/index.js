import {Component} from "react";

export default class Loader extends Component {
    render() {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
        )
}
}