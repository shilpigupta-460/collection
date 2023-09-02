import { useContext } from "react";
import TodoContext from "./todoContext";

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([
        { id: 54.47384850970934, item: "saa" },
        { id: 77.1046343415689, item: "mdks" }])

    const contextVal = { todoList }
    return
    < TodoContext.Provider value={todoList}>
        {children}
    </TodoContext.Provider>

}
export default TodoProvider;