import React, { useState } from 'react'

const Todo = (props) => {
    const [todo, setTodo] = useState('')

    return (
        <div>

            <form onSubmit={(e) => {
                e.preventDefault()
                props.add(todo)
                setTodo("")

            }}>
                <input type=" text" placeholder=' Add todo' value={todo}
                    onChange={(e) => setTodo(e.target.value)} />
                <button>Add</button>
            </form>


        </div>
    )
}
export default Todo 
