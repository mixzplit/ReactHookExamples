import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("todoReducer test", () => {
  // Estado inicial - object
  const initialState = [
    {
      id: 1,
      description: "Demo TODO",
      done: false,
    },
  ];

  test("should be return initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should be add a task to TODO", () => {
    // Action
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "New Task",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should remove a task TODO", () => {
    // Action
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    console.log(newState.length);
    expect(newState.length).toBe(0);
  });

  test("should be mark task with DONE", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toEqual(true);
  });
});
