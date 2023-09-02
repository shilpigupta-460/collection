import React from 'react'

const List = ({ text, setText }) => {
    return (
        <div>
            <ul>
                {
                    text.map((todo, i) =>
                    (<>
                        <li key={i}> {todo}</li>
                        <button> Edit</button>
                        <button> Delete </button>
                    </>

                    ))
                }
            </ul>
        </div>
    )
}

export default List