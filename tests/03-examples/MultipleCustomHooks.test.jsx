const { render, screen } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");

describe('<MultipleCustomHooks> tests', () => {
  
  test('should be show component default', () => {
    render(<MultipleCustomHooks />);
    screen.debug();

    // asserts
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));
    // button
    const nextButton = screen.getByRole('button',{name:'Next quote'});
    const prevButton = screen.getByRole('button',{name:'Previous quote'});

    expect(nextButton.disabled).toBeTruthy();
    expect(prevButton.disabled).toBeTruthy();

  });
});