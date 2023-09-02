import React, { useState } from 'react'


const Todos = () => {
    const [todos, setTodos] = useState([])
    const [inputVal, setInputVal] = useState('')
    const [edit, setEdit] = useState(false)
    const [editItem, setEditItem] = useState(null)
    const handleAdd = (e) => {
        e.preventDefault()
        if (!inputVal) return alert(' please enter todo')

        // setTodos([...todos, inputVal])
        else if (editItem) {
            setTodos(
                todos.map(el => {
                    if (el.id === editItem)
                        return { ...el, text: inputVal }
                    return el
                }))
            setEdit(!edit)
        }
        else {
            setTodos([
                ...todos,
                { id: Math.random() * 1234, text: inputVal, completed: false }
            ])
        }
        // setTodos((pre) => {
        //     return [
        //         ...pre,
        //         { id: Math.random() * 1234, text: inputVal, completed: false }
        //     ]
        // })
        console.log(todos);


        setInputVal("")

    }
    const handleDel = (id) => {
        const restTodos = todos.filter((todo) => todo.id !== id)
        setTodos(restTodos)
    }
    const handleUp = (item) => {
        setEdit(!edit)
        const editTodo = todos.find((t) => { return t.id === item.id })
        setInputVal(editTodo.text);
        setEditItem(item.id)
        // setEdit(!edit)
        // const test = prompt(`${editTodo.text}`)
        // setTodos({ id: item.id, text: test.text, completed: false })
    }
    const handleCom = ({ id }) => {
        const completTodo = todos.find(el => el.id === id)
        setTodos({ ...completTodo, completed: true })
    }
    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" placeholder='Enter todo' name=" todo" value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)} />
                <button> {edit ? 'Save' : 'Add'}</button>
            </form>
            {/* {todos} */}
            <ul>

                {todos && todos.map((item) =>
                // {
                // return (<TodoList item={item} handleUp={handleUp} handleCom={handleCom} handleDel={handleDel} key={item.id} />)
                (<div key={item.id}>
                    <li > {item.text}</li>
                    < button onClick={() => handleUp(item)} > Edit</button>
                    < button onClick={() => handleDel(item.id)}> delete</button>
                    < button onClick={() => handleUp(item)}> Complete</button>
                </div>)
                    // }
                )}
            </ul>
        </div >
    )
}

export default Todos