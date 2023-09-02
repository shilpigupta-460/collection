import React from 'react'
import Clock from './Clock'
/*Some JavaScript functions are pure. A pure function:
#Minds its own business. It does not change any objects or variables that existed before it was called.
#Same inputs, same output. Given the same inputs, a pure function should always return the same result.*/
const Pure = ({ guest }) => {
    return (
        <div>
            <h1> hello how are you # {guest}</h1>
        </div>
    )
}
const PureFun = () => {
    return (
        <div>
            <Pure guest="1" />
            <Pure guest={2} />
            <Pure guest={3} />
            <Clock color={["red", "grey", "pink"]} />
        </div>
    )
}

export default PureFun