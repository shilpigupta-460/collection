import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn about React" },
        { id: 1, text: "Meet friend for lunch" },
        { id: 1, text: "Build really cool todo app" }
    ])
    const [todo, setTodo] = useState('')
    const handleSubmit = (e) => {

        e.preventDefault()
        {
            (todo !== "") ?
                setTodos((pre) => {
                    return [
                        ...pre,
                        { id: Math.random() * 1234, text: todo, completed: false }
                    ]
                }) : setTodo({ id: Math.random() * 1234, text: todo, completed: false })
        }

        setTodo("")
        console.log(todos);
    }
    const handleDel = (item) => {
        const restTodo = todos.filter(todo => todo !== item)
        setTodos(restTodo)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ margin: " 20px" }}>
                <input type="text" name="name" value={todo} onChange={
                    (e) => { setTodo(e.target.value) }} />
                < button > Add</button>
            </form >
            <ul>
                {todos.map((item, index) => (
                    <div key={index}>
                        <li > {item.completed} {item.text}  <button onClick={() => handleDel(item)}>X</button> </li>

                    </div>
                ))}

            </ul>
            {/* {todos.text} */}
        </div>
    )
}

export default Todo