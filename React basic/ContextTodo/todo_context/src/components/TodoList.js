import React, { useContext } from 'react'
import TodoContext from "../context/todoContext"
const TodoList = () => {
    const { todoList } = useContext(TodoContext)
    return (
        <div>
            <ul>
                {
                    todoList.map((item) => {
                        return (
                            <li key={item.id}> {item.item} {''}<i class="fa fa-trash" aria-hidden="true"></i></li>)
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList