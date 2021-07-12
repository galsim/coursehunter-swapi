import React from 'react'
import {SwapiServiceConsumer} from "../SwapiServiceContext";

const withSwapiService = (Wrapped, mapMethodsToProps) => (props) => (
    <SwapiServiceConsumer>
        {
            (swapiService) => {
                const serviceProps = mapMethodsToProps(swapiService)
                console.log(serviceProps)
                return (<Wrapped {...props} {...serviceProps} />)
            }
        }
    </SwapiServiceConsumer>

)

export default withSwapiService