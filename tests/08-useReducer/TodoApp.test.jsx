const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodo } = require("../../src/hooks/useTodo");


jest.mock(`../../src/hooks/useTodo`);

describe('Pruebas en <TodoApp />', () => {
  
  useTodo.mockReturnValue({
    todos: [
      {id:1, description: "Todo # 1", done: false },
      {id:2, description: "Todo # 2", done: true },
      {id:3, description: "Todo # 3", done: true },
    ],
    todosCount: 3, 
    todosPending: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  })
  
  test('should be show functinal component right', () => {
    
    render(<TodoApp/>);
    //screen.debug();

    expect(screen.getByText('Todo # 1')).toBeTruthy();
    expect(screen.getByText('Todo # 2')).toBeTruthy();
    expect(screen.getByText('Todo # 3')).toBeTruthy();

  });


});