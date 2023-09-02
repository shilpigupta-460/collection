
import React, { useState } from 'react'

const BackgroundColorChange = () => {

    const handleClick = () => {
        let bodyStyle = document.body.style;
        {
            bodyStyle.backgroundColor === 'black' ?
                bodyStyle.backgroundColor = 'white' :

                bodyStyle.backgroundColor = 'black';
        }
    }
    return (
        <div>
            <button onClick={handleClick}> Backgroung color</button>
        </div>
    )
}

export default BackgroundColorChange