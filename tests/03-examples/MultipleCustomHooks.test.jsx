const { render, screen, fireEvent, renderHook } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");
const { useCounter } = require("../../src/hooks/useCounter");
const { useFetch } = require("../../src/hooks/useFetch");

// Mocking useFetch Hook
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("<MultipleCustomHooks> tests", () => {
  const incrementMock = jest.fn(); //Emulamos la funcion increment de useCounter
  useCounter.mockReturnValue({
    counter: 1,
    increment: incrementMock
  });
  // Limpiamos todos los mocks
  beforeEach(() => {
    jest.clearAllMocks();
  })


  test("should be show component default", () => {
    // Mock useFetch
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    
    render(<MultipleCustomHooks />);
    screen.debug();

    // asserts
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));
    // button
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    const prevButton = screen.getByRole("button", { name: "Previous quote" });

    expect(nextButton.disabled).toBeTruthy();
    expect(prevButton.disabled).toBeTruthy();
  });

  test("should be show a Quote", () => {
    // Mock useFetch
    useFetch.mockReturnValue({
      data: [{author: 'David', quote: 'Cuando el rio suena... es por que hay rumba cerca'}],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Cuando el rio suena... es por que hay rumba cerca')).toBeTruthy();
    expect(screen.getByText('David')).toBeTruthy();


    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();

    //screen.debug();
  });

  test('should be call to increment function', () => {
    // const {result} = renderHook(() => useCounter(1));
    // const { increment } = result.current
    
    useFetch.mockReturnValue({
      data: [{author: 'David', quote: 'Cuando el rio suena... es por que hay rumba cerca'}],
      isLoading: false,
      hasError: null,
    });
    
    render(<MultipleCustomHooks />);    
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);

    expect(incrementMock).toHaveBeenCalled();
    // expect(increment).toHaveBeenCalledTimes(1);

  });

});
