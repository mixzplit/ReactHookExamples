import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Tests <HomePage />', () => {
  
  const user = {
    id: 1,
    name: 'David'
  }
  
  test('should be show component without user', () => {
    render(
        <UserContext.Provider value={{user: null}} >
          <HomePage />
        </UserContext.Provider>
      );
    /* screen.debug(); */

    const preTag = screen.getByLabelText('pre'); //aria-label

    expect(preTag.innerHTML).toBe('null');

  });

    test('should be show component WITH user ', () => {
      render(
        <UserContext.Provider value={{user}} >
          <HomePage />
        </UserContext.Provider>
      );
    screen.debug();

    const preTag = screen.getByLabelText('pre'); //aria-label

    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name); 


  });

});