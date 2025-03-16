import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

  return (
    <>
        <ul className="list-group d-flex justify-content-between">
        {
            todos.map( (todo, i) => (
                // TODO item ...
                <TodoItem 
                  key={todo.id} todo={todo} i={i} 
                  onDeleteTodo={onDeleteTodo}
                  onToggleTodo={onToggleTodo}
                />
                // TODO item ...
            ))
        }
        </ul>
    </>
  )
}
