/*  traversing objext of ARRAY & NESTED Object( with  help of Object.entries & map)*/

import React from 'react'

const person = [
    {
        name: "test",
        age: 24,
        address: {
            city: "London",
            street: "test",
            zipcode: 247001
        }
    },
    {
        name: "test",
        age: 24,
        address: {
            city: "London",
            street: "test",
            zipcode: 247001
        }
    }

]
const theme = {
    backgroundColor: 'black',
    color: 'pink'
}

const ObjectAccess = () => {
    return (
        <div style={theme}>  test
            <ul>
                {person.map(per => {
                    return (
                        <li> {per.name} {''} {per.age}
                            <p>
                                {
                                    Object.entries(per.address).map(([key, value]) => (
                                        <div key={key}>{value}</div>
                                    ))
                                }

                            </p>
                        </li>

                    )
                })}</ul>
        </div >
    )
}

export default ObjectAccess
