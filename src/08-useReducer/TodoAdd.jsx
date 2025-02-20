import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {


    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

  const addTodo = (e) => {
    e.preventDefault();

    if( description.trim().length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    };

    onNewTodo && onNewTodo( newTodo );
    onResetForm();
  }

  return (
    <>
        <form onSubmit={addTodo}>
            <input
              type="text"
              className="form-control"
              placeholder="¿Qué hay que hacer?"
              name="description" 
              value={description}
              onChange={ onInputChange }
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    </>
  )
}
