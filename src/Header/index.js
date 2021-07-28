import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class Header extends Component{
    render() {
        const {onServiceChange} = this.props
        return (
            <div className="header d-flex p-2">
                <Link to='/'>
                    <button
                        className="btn btn-outline btn-sm text-white"
                    >
                        Home
                    </button>
                </Link>
                <Link to='/people'>
                    <button
                        className="btn btn-outline btn-sm text-white"
                    >
                        People
                    </button>
                </Link>

                <Link to='/starship'>
                    <button
                        className="btn btn-outline btn-sm text-white"
                    >
                        Starship
                    </button>
                </Link>

                <Link to='/planets'>
                    <button
                        className="btn btn-outline btn-sm text-white"
                    >
                        Planets
                    </button>
                </Link>

                <button
                    className="btn btn-primary btn-sm text-white"
                    onClick={onServiceChange}
                >
                    Change Service
                </button>
            </div>
        )
    }
}