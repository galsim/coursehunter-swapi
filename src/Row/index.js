import {Component} from "react";

export default class Row extends Component {
    render() {
        const {left, right} = this.props
        return (
            <div className="d-flex">
                <div className="col-md-6">
                    {left}
                </div>
                <div className="col-md-6">
                    {right}
                </div>
            </div>
        )
    }
}