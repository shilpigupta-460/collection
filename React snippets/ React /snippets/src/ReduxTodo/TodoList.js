import React from 'react'
import { useDispatch } from 'react-redux'

const TodoList = ({ todos, handleEdit, handleDone, handleDel, show, setShow }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {todos.map(todo =>
                (
                    <li key={todo.id}> {todo.task} {''}{''}
                        {!show ? (<>
                            <button onClick={() => handleEdit(todo.id)}><span>✎ </span></button>
                            <button onClick={() => handleDone(todo.id)}> <span>✅</span></button>  </>) :

                            (<button onClick={() => handleDone(todo.id)}><span>✅</span></button>
                            )}
                        <button onClick={() => handleDel(todo.id)}>❎</button>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default TodoList