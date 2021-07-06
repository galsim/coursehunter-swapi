import React from 'react'
import {SwapiServiceConsumer} from "../SwapiServiceContext";

const withSwapiService = (Wrapped) => (props) => (
    <SwapiServiceConsumer>
        {
            (swapiService) => (
                <Wrapped {...props} swapiService={swapiService} />
            )
        }
    </SwapiServiceConsumer>

)

export default withSwapiService