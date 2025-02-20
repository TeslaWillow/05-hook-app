import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [] }) => {
  return (
    <>
        <ul className="list-group d-flex justify-content-between">
        {
            todos.map( (todo, i) => (
                // TODO item ...
                <TodoItem key={todo.id} todo={todo} i={i} />
                // TODO item ...
            ))
        }
        </ul>
    </>
  )
}
