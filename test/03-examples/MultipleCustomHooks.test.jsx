import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";


jest.mock("../../src/hooks");

describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => {

        useCounter.mockReturnValue({
            counter: 1,
            decrement: () => {},
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: null,
            hasError: null,
            isLoading: true
        });

        render(<MultipleCustomHooks />);
        screen.debug();

        expect( screen.getByText('Cargando') );
        
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect( nextButton ).toBeInTheDocument;
    });

    test('debe de mostrar un card', () => {

        const data = {
            data: {
                id: 1,
                name: 'Pikachu',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/26.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/27.png'
                }
            },
            hasError: null,
            isLoading: false
        };

        useCounter.mockReturnValue({
            counter: 1,
            decrement: () => {},
            increment: () => {}
        });
        

        useFetch.mockReturnValue(data);

        render(<MultipleCustomHooks />);
        expect( screen.getByText(`#${data.data.id} - ${data.data.name}`) ).toBeTruthy();
    });

    test('debe de llamar la funcion incrementar', () => {
        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            decrement: () => {},
            increment: mockIncrement
        });
        
        useFetch.mockReturnValue({
            data: null,
            hasError: null,
            isLoading: true
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextButton);
        
        expect(mockIncrement).toHaveBeenCalled();
    });


});