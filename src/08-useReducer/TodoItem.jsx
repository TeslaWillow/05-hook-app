export const TodoItem = ({ todo = {}, i }) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ i + 1 }. { todo.description }</span>
            <button className="btn btn-danger">
                Borrar
            </button>
        </li>
    </>
  )
}
