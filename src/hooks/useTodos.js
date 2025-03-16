import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";

const initialState = [
    /*
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false,
        },
    */
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {

    // useTodos
        // todos, handleDeleteTodo, handleToggleTodo, handleNewTodo
    
        const [ todos , dispatchTodo ] = useReducer( todoReducer , initialState, init );
    
        useEffect(() => {
          localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos])
        
        const handleDeleteTodo = (id) => {
            dispatchTodo({
                type: '[TODO] Remove Todo',
                payload: id,
            });
        };
    
        const handleNewTodo = (todo) => {
            dispatchTodo({
                type: '[TODO] Add Todo',
                payload: todo,
            });
        };
    
        const handleToggleTodo = (id) => {
            dispatchTodo({
                type: '[TODO] Toggle Todo',
                payload: id,
            });
        }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((t) => !t.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  }
}
