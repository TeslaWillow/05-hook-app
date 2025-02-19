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
            <h1>Todo App: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group d-flex justify-content-between">
                        {
                            todos.map( (todo, i) => (
                                <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                                    <p className="text-center">{ i + 1 }. { todo.description }</p>
                                    <button className="btn btn-danger">
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form action="">
                        <input type="text" className="form-control" placeholder="¿Qué hay que hacer?" />
                        <button type="submit" className="btn btn-outline-primary mt-1">
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

            
        </>
    )
}
