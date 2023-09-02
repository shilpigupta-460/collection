import React from 'react'


const Clock = ({ color }) => {
    const [red, grey, pink] = color
    return (
        <div>
            <select >
                <option value={pink}>pink</option>
                <option value={grey}> grey</option>
                <option value={red}> red</option>
            </select>
            <p > color</p>
        </div>
    )
}

export default Clock