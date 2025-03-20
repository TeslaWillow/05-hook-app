const { render, screen, fireEvent } = require("@testing-library/react");
const { LoginPage } = require("../../src/09-useContext/LoginPage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");

describe('Pruebas en <LoginPage />', () => {

    const onSetUserButton = jest.fn();

    test('Debe de mostrar el compomente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });

    test('Debe de llamar el setUser cuando se hace click en el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null, setUser: onSetUserButton }}>
                <LoginPage /> 
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );
        expect(onSetUserButton).toHaveBeenCalledWith({
            id: 1234,
            name: 'hector',
            email: 'hector@sube.la'
        });
    });
})