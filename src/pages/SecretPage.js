import React from 'react'
import {Redirect} from 'react-router-dom'

const SecretPage = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center text-white">
                <h3>The page is full secrets!!!</h3>
            </div>
        )
    }

    return <Redirect to='/login' />
}

export default SecretPage