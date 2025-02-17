import { useReducer } from "react"
import { todoReducer } from "./TodoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 2,
        description: 'Recolectar la piedra del alma',
        done: false,
    },
];




export const TodoApp = () => {

    const [ todos , dispatchTodo ] = useReducer( todoReducer , initialState );

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}
