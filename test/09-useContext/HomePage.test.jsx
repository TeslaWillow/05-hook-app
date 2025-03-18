const { render, screen } = require("@testing-library/react");
const { HomePage } = require("../../src/09-useContext/HomePage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");

describe('Pruebas en <HomePage />', () => {

    const user = {
        name: 'Hector',
        email: 'hector@sube.la'
    };

    test('debe de mostrar el componente sin el usuario', () => {
        render(  
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

    });

    test('debe de mostrar el componente con el usuario', () => {
        render(  
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );

        screen.debug();
        const preTag = screen.getByLabelText('pre');
        
        expect( preTag.innerHTML ).toBe(JSON.stringify( user, null, 3 ));
    });
});