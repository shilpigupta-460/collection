import React, { useState, useRef } from 'react'

const StateEx = () => {
    const [input, setInput] = useState('test')
    const inputRef = useRef()
    const handleSubmit = () => {
        alert(`${inputRef.current.value}`)

    }

    return (

        // Control Component
        //         In a controlled component, form data is handled by a React component.

        // The alternative is uncontrolled components, where form data is handled by the DOM itself.
        // Its advice to use the Controlled Components more in react as you can perform instant validation and enforce dynamic inputs.
        // <div>

        //     <form>
        //         <input type="text" name="input" value={input} onChange={(e) => setInput(e.target.value)} />
        //         {input}
        //     </form>
        // </div>

        // uncontrol component

        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={input} ref={inputRef} />

            </form>
        </div>
    )
}

export default StateEx