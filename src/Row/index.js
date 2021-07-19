import {Component} from "react";
import PropTypes from "prop-types";

export default class Row extends Component {
    static propTypes = {
        left: PropTypes.node,
        right: PropTypes.node,
    }

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