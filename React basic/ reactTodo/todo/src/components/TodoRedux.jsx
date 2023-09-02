import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delAllTodo, delTodo, editTodo } from '../actions/index';
const TodoRedux = () => {
    const [inputVal, setInputVal] = useState('')
    const dispatch = useDispatch()
    const list = useSelector((state) => state.todoReducer.list)
    return (
        <div id="test" className="App" style={{ marginTop: '50px' }}>
            <form >
                < input type='text' name="todo" placeholder='add todo'
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)} />

                < button onClick={dispatch(addTodo(inputVal))}> Add</button>
                < button onClick={dispatch(delTodo(inputVal.id))}> Delete</button>
            </form>
            <div>
                {list.map((el) => {
                    return (
                        <div key={el.id}>
                            {el.data}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default TodoRedux