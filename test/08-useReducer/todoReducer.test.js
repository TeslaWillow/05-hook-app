import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        todo: 'Aprender React',
        done: false
    }];

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toEqual(initialState);
    });

    test('debe de agregar un TODO', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                todo: 'Aprender Angular',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toEqual(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        expect(newState).not.toContain(initialState[0]);
    });

    test('debe de realizar el Toggle del TODO', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    });

})