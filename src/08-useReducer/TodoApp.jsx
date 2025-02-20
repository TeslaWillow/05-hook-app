import { useReducer } from "react"
import { todoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 2,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    },
];

export const TodoApp = () => {

    const [ todos , dispatchTodo ] = useReducer( todoReducer , initialState );

    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatchTodo( action );
    };

    return (
        <>
            <h1>Todo App: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TODO LIST */}
                    <TodoList  todos={todos} />
                    {/* TODO LIST */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* TODO ADD onNewTodo() */}
                    {/* {
                        id: new Date().getTime(),
                        description: '',
                        done: false,
                    } */}
                    <TodoAdd onNewTodo={ handleNewTodo } />
                    {/* TODO ADD */}
                </div>
            </div>

            
        </>
    )
}
