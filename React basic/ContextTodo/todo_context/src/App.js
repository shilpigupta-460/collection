
import React, { useState } from 'react'
import Todo from './components/Todo'
import TodoList from './components/TodoList'



const App = () => {
  // const [todoList, setTodoList] = useState([])
  // let add = (text) => {
  //   setTodoList([...todoList, {
  //     id: Math.random() * 123, item: text
  //   }])
  //   console.log(todoList);
  // }
  return (
    <div>
      {/* <Todo add={add} /> */}
      {/* <TodoList todos={todoList} /> */}

      <Todo />
      <TodoList />
    </div>
  )
}

export default App
