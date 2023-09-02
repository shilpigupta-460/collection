

export const addTodo = (data) => {
    return {
        type: " ADD_TODO",
        payload: {
            id: Math.random() * 123,
            data: data
        }
    }
}

export const delTodo = () => {
    return {
        type: " DEL_TODO"
    }
}
export const editTodo = () => {
    return {
        type: " EDIT_TODO"
    }
}
export const delAllTodo = () => {
    return {
        type: " DEL_ALL"
    }
}

