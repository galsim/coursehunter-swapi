import {Component} from "react";

export default class ErrorPlug extends Component {
    render() {
        return (
            <div className="error text-center text-danger">
                <div className="h2 boom">BOOM!</div>
                <div>something has gone terrible wrong</div>
                <div>(but we already sent droids to fix it)</div>
            </div>
        )
    }
}