import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage /> ', () => {
  const setUserMock = jest.fn(); //Emulamos la funcion increment de useCounter


  test('should be show component WITHOUT user ', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
      );

    /* screen.debug(); */
    const preTag = screen.getByLabelText('pre'); //aria-label

    expect(preTag.innerHTML).toBe('null');

  });

  test('should call setUser when button clicked', () => {

    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
      );

    const button = screen.getByRole("button", {name: 'Establecer Usuario'});
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: "David Acurero", email: "acurero.david@gmail.com" });

  });

});