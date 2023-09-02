import React from 'react'
const person =
{
    id: 2,
    name: "test",
    age: 24,
}


const Avatar = ({ id }) => {    // 1) ({ person })      <div>{ person.name} </div> 
    //2)
    const { name, age } = person
    return (
        <div>{name} {age}</div>
    )
}


const PassingProps = () => {
    return (
        <div><Avatar person={person} /></div>
    )
}

export default PassingProps