import React, {Component} from 'react'

export default class Header extends Component{
    render() {
        const {onServiceChange} = this.props
        return (
            <div className="header d-flex p-2">
                <button
                    className="btn btn-primary btn-sm"
                    onClick={onServiceChange}
                >
                    Change Service
                </button>
            </div>
        )
    }
}