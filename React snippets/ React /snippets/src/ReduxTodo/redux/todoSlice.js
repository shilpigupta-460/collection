import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todos: []
}

export const todoSlice = createSlice({

    name: "todoSlice",
    initialState: initialState,
    reducers: {
        addTodos: (state, action) => {

            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            const r = state.todos.filter(el => el.id !== action.payload)
            state.todos = r
        },
        updateTodo: (state, action) => {
            state.value += action.payload
        },
        completeTodo: (state, action) => {
            const editedTodo = state.todos.map(el => el.id === action.payload)
            state.todos = { ...state.todos, done: !action.payload }
        },
    },
})
export const { addTodos, deleteTodo, updateTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer