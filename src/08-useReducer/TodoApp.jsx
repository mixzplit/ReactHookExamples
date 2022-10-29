import React from "react";
import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  //hook usTodo
  const {todos,todosCount, todosPending, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount} <span>Pendientes: {todosPending}</span>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={(id) => handleDeleteTodo(id)} onToggleTodo={handleToggleTodo} />
        </div>

        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          {/* Mandamos la funcion como referencia al componente TodoAdd */}
          <TodoAdd onNewTodo={(e) => handleNewTodo(e)} />

        </div>
      </div>
    </>
  );
};
