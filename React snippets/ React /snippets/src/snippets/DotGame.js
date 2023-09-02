import React, { useState } from 'react'
const div1 =
{
    width: '100vw',
    height: '100vh',
    background: "grey",
    position: 'relative',
}

const DotGame = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    const handleMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    const div2 =
    {
        width: '20px',
        height: '20px',
        background: "red",
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,

    }
    return (
        <div style={div1} onPointerMove={handleMove}>
            <div style={div2} >

            </div>
        </div>
    )
}

export default DotGame