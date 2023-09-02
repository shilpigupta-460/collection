import React from 'react'
import data from "./data"
const RenderingListData = () => {
    const handler = (d) => {
        //alert(`${d.name}${d.profession}`)
        alert("hello")


    }
    return (
        <div>
            <ul>
                {data.map(d =>
                    <li key={d.id}> {d.name} <button
                        // onClick={() => {alert(`${d.name}${d.profession}`)}} 
                        onClick={() => handler(d)} // when need to pass data(whole one object) to the handler use arrow function 
                    // onClick={handler} //  if not dat pass    alert("hello")
                    > Detail</button>
                    </li>
                )}
            </ul>
        </div>)
}

export default RenderingListData