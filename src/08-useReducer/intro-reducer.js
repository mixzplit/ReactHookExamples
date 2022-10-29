const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false,
}];

// Un reducer siempre de retornar un nuevo estado, no muta el mismo
// Un reducer por lo general recibe 2 argumentos: el estado incial
// y la accion que generara el nuevo estado
const todoReducer = (state = initialState, action = {}) => {
  // Validamos para regresar un nuevo estado segun la accion
  if(action.type === '[TODO] add todo'){
    return [...state, action.payload]
  }


  return state
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar las piedras del Infinito',
  done: false,
}

// Accion
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});