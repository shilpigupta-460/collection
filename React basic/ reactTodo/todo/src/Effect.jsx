import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [inputVal, setInputVal] = useState([])

    // useEffect(() => {
    //     document.getElementById('test').innerHTML = `welcome ${inputVal}`

    // }, [inputVal])
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(res => res.json())
    //         .then(data => setInputVal(data.results))
    //         .catch(err => console.log(err))
    // }, [])
    return (
        <div>

            {/* <input type="text" placeholder='name' value={inputVal}
                onChange={(e) => setInputVal(e.target.value)} /> */}

            {inputVal.map((el, i) => {
                return (
                    <div key={i}> {el.name}</div>
                )

            }
            )}

        </div >
    )
}

export default Effect