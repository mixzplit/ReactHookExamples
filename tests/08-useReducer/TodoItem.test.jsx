import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("<TodoItem /> tests", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should be show pending Todo", () => {
    render(<TodoItem todo={todo} onToggle={onToggleTodoMock} onDelete={onDeleteTodoMock} />);

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");

  });

  test("should be show complete Todo", () => {
    
    todo.done = true;

    render(<TodoItem todo={todo} onToggle={onToggleTodoMock} onDelete={onDeleteTodoMock} />);

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");

  });

  test('span should be call toggleTodo when press click', () => { 
    
    render(<TodoItem todo={todo} onToggle={onToggleTodoMock} onDelete={onDeleteTodoMock} />);

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);


  });


  test('button should be call deleteTodo when press click', () => { 
    
    render(<TodoItem todo={todo} onToggle={onToggleTodoMock} onDelete={onDeleteTodoMock} />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);


  });

});
