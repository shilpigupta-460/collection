import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { addTodos, completeTodo, deleteTodo } from './redux/todoSlice'
// import { addTodo, deleteTodo, updateTodo, completeTodo } from "../ReduxTodo/redux/todoSlice"

const Todos = () => {
    const dispatch = useDispatch()
    const todotest = useSelector((state) => state.todo.todos)
    console.log(todotest);
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const [editing, setEditing] = useState(true)
    const [updated, setUpdated] = useState(null)
    const [show, setShow] = useState(false)
    const handleAddTodo = (e) => {
        e.preventDefault()
        if (input === '') return
        // { editing && updated }
        // else {
        //     if (input && !editing) {
        //         setTodos(todos.map(item => {
        //             if (item.id === updated) {
        //                 return { ...item, task: input }
        //             } return item

        //         }))
        //         setEditing(!editing)

        //     }
        //     else { setTodos([...todos, { id: uuidv4(), task: input, done: false }]) }

        //     setInput('')
        // }
        dispatch(addTodos({ id: uuidv4(), task: input, done: false }))
        setInput('')
    }
    const handleDel = (id) => {

        dispatch(deleteTodo(id))
    }
    const handleEdit = (id) => {
        const editedTodo = todos.find(el => el.id === id)
        console.log()
        setInput(editedTodo.task)
        setEditing(!editing)
        setUpdated(id)

    }
    const handleDone = (id) => {
        // const completedTodo = todos.map(el => {
        //     if (el.id === id) {
        //         return ({ ...el, done: !el.done })
        //     }
        //     return el
        // })

        // setTodos(completedTodo)
        // setShow(!show)
        dispatch(completeTodo(id))

    }

    return (
        <div>
            <TodoForm input={input} setInput={setInput} addTodo={handleAddTodo} />

            <TodoList todos={todotest}
                handleDel={handleDel}
                handleEdit={handleEdit}
                handleDone={handleDone}
                show={show}
                setShow={setShow} />
            {/* {console.log(todos)} */}

        </div>
    )
}

export default Todos