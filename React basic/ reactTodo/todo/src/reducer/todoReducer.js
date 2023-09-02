const intialData = {
    list: []
}

const todoReducer = (state = intialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload
            return {
                ...state,
                list: [
                    ...state.list,
                    { id: id, data: data }
                ]
            }
        // case: " DEL_TODO"
        //     const { id } = action.id
        //     return ...state, list:
        default:
            return state


    }
}
export default todoReducer;