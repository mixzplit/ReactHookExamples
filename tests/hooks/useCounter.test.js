const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks");


describe('Hook useCounter Test', () => {

  test('should be return default values', () => {
    // Para testear un hook debemos hacer un render
    // para simular un functional component, para eso
    // esta render de testing-library
    const {result} = renderHook(() => useCounter());
    // Desestructuramos el result de renderHook
    const {counter,increment,decrement, reset} = result.current;

    
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  });

  test('should be generate a counter with value 100', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter} = result.current

    expect(counter).toBe(100);  

  });

  test('should be increment counter', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter, increment} = result.current;

    // Como vamos a evaluar que el contador incremente su valor
    // deber llamar a increment y esto es una Funcion, pero
    // para disparar eventos de estados test de React debemos
    // usar act(...)
    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);

  });

  test('should be decrement counter', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter, decrement} = result.current;

    // Como vamos a evaluar que el contador incremente su valor
    // deber llamar a increment y esto es una Funcion, pero
    // para disparar eventos de estados test de React debemos
    // usar act(...)
    act(() => {
      decrement();
    });
    // Usamos result.current.counter por al esperar el valot
    // de counter, al ser un valor primitivo este no cambia
    // su estado al momento de disparar el evento de estado.
    // Podriamos cambiar en el Hook que incremente segun su
    // valor actual y con eso quedaria resuelto, pero como esta
    // nuestra prueba funciona.
    expect(result.current.counter).toBe(99);

  });

  test('should be reset to default values', () => {
    const {result} = renderHook(() => useCounter(100));
    const {counter, increment, decrement, reset} = result.current;

    act(() =>{
      increment();
      reset();
    });

    expect(result.current.counter).toBe(100);


  });

});