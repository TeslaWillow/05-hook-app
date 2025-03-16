import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    return (
        <>
            <h1>Todo App: {todosCount}, <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TODO LIST */}
                    <TodoList  
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo} 
                        onToggleTodo={handleToggleTodo}
                    />
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
