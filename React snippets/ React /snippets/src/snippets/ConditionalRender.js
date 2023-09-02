import React from 'react'
const list = [
    { item: "workout", completed: false },
    { item: "cooking", completed: true },
    { item: "cleaning", completed: true },
    { item: "walking", completed: false }
]


const ContionalRender = () => {

    return (
        <div >
            <h1> Daliy Routine</h1>
            {list.map((l, i) => {
                return (
                    <li key={i} onClick={() => { alert(`${i}`) }} >{l.item}
                        {l.completed && '✔'}</li> // In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
                    //{l.completed ? l.item + ' ✔' : l.item}
                    //{l.completed ? (<del>l.item  + ' ✔' </del>): (l.item)// strike the completed
                    /*A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. But if the condition is false, the whole expression becomes false. React considers false as a “hole” in the JSX tree, just like null or undefined, and doesn’t render anything in its place.*/
                    /*Don’t put numbers on the left side of &&.
                     messageCount > 0 && <p>New messages</p>. */
                )
            })

            }
        </div>)
}

export default ContionalRender