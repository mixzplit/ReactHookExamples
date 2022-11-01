import { act, fireEvent, renderHook, screen } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("Hook useForm tests", () => {
  const initialForm = {
    name: "David",
    email: "acurero.david@gmail.com",
  };

  test("should be return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result);

    expect(result.current).toEqual({
      name:  initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm:  expect.any(Function)  
    });
  });

  test('should be change input name', () => {
    const newValue = 'Julian';
    const { result } = renderHook(() => useForm(initialForm));
    const {onInputChange} = result.current;

    act(() => {
      onInputChange({target:{name:'name', value: newValue}});
    })

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

  });

  test('should be reset form', () => {
    const newValue = 'Julian';
    const { result } = renderHook(() => useForm(initialForm));
    const {onInputChange, onResetForm} = result.current;

    act(() => {
      onInputChange({target:{name:'name', value: newValue}});
      onResetForm();
    })

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);

  });

});
