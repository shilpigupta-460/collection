import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState(initialTasks)
    const [todo, setTodo] = useState("");
    const [updateTodo, setUpdateTodo] = useState('')
    const [isEditing, setIsEditing] = useState(null)
    const [toggleEdit, setToggleEdit] = useState(true)

    return (
        <div><Form tasks={tasks} setTasks={setTasks} todo={todo} setTodo={setTodo} toggleEdit={toggleEdit} isEditing={isEditing} />
            <TodoList tasks={tasks}
                setTasks={setTasks}
                updateTodo={updateTodo}
                setUpdateTodo={setUpdateTodo}
                setTodo={setTodo}
                setIsEditing={setIsEditing}
                setToggleEdit={setToggleEdit}
                toggleEdit={toggleEdit} /></div>
    )
}

export default Todo
const Form = ({ tasks, setTasks, todo, setTodo, toggleEdit, isEditing }) => {


    const handlesubmit = (e) => {
        e.preventDefault()
        //id: new Date().getSeconds().toString()
        if (tasks === '') { alert('enter data') }
        else if (todo && !toggleEdit) {
            setTasks(tasks.map(el => {
                if (el.id === isEditing) {
                    return { ...el, text: todo }
                } return el
            }))
        } else {
            setTasks([...tasks,
            { id: ++nextId, text: todo, done: false }])


        }
        setTodo("")


    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text"
                    value={todo}
                    placeholder="Enter Task"
                    onChange={e => setTodo(e.target.value)}></input>
                <button> Add</button>
                {/* <p>{todo}</p> */}
            </form>
        </div>
    )
}
let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];
const TodoList = ({ tasks, setTasks, updateTodo, setUpdateTodo, setTodo, todo, setIsEditing, setToggleEdit, toggleEdit }) => {


    // console.log(tasks);
    const handleDelete = (id) => {
        const newTodo = tasks.filter(t => {
            return t.id !== id
        })
        setTasks(newTodo)
    }

    const handleDone = (id) => {
        const doneTodo = tasks.map(t => {
            if (t.id === id) { return ({ ...t, done: !t.done }) }
            return t
        })
        setTasks(doneTodo)
        console.log(doneTodo);


    }
    const handleEdit = (id) => {
        const itemToBeUpdate = tasks.find(el => { return el.id === id })
        console.log(itemToBeUpdate);
        setTodo(itemToBeUpdate.text)
        setIsEditing(id)
        setToggleEdit(!toggleEdit)

        // setTasks(
        //     tasks.map((t) => {
        //         if (t.id === todo.id) {
        //             return todo;
        //         } else {
        //             return t;
        //         }
        //     })
        // );
        //const editedTodo = tasks.map(todo => todo.id === id)
        // const test = prompt(`${todo.text}`)



        // // console.log(id);


        // setUpdateTodo({ id: todo.id, text: test, done: 'false' })
        // console.log(updateTodo.text);
        // // const doneTodo = tasks.map(t => {
        // //     return t.id === todo.id ? setTasks(updateTodo) 
        // // })
        // tasks.map(item => {

        //     if (item.id === todo.id) {
        //         return setTasks({ ...tasks, updateTodo })
        //     }
        // })




    }


    return (
        <ul>
            {
                tasks.sort((a, b) => b.id - a.id).map((todo, index) => {
                    return (

                        <li key={todo.id} id={todo.id}>

                            <input type="text" value={todo.text} onChange={e => e.preventDefault()} />

                            <button onClick={() => handleEdit(todo.id)} > {!todo.done && 'Edit'}</button> {' '}
                            <button onClick={() => handleDone(todo.id)} >{todo.done ? '✓' : 'Complete'}</button> {' '}
                            <button onClick={() => handleDelete(todo.id)}>Delete</button></li>

                    )
                })
            }
        </ul>
    )
}


