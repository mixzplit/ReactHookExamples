export const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
{/*       En este punto vamos a agregar una clase CSS condicional cuando
      la tarea seleccionada de la lista es marcada como 'done: true' */}
      <span 
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}` } 
        onClick={() => onToggle(todo.id)}>
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
