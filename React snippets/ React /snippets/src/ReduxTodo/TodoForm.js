import React from 'react'
import { useDispatch } from 'react-redux'

const TodoForm = ({ input, setInput, addTodo }) => {
    // const dispatch = useDispatch()
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Enter Todo' value={input} onChange={e => setInput(e.target.value)} />
                <button type='submit'>Add</button>

            </form>
        </div>
    )
}

export default TodoForm