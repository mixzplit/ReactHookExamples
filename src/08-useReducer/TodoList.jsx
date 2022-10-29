import { TodoItem } from "./TodoItem";

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  //console.log(todos);
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={(id) => onDeleteTodo(id) }
          onToggle={onToggleTodo}  />
      ))}
    </ul>
  );
};
