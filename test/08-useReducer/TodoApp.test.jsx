const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodos } = require("../../src/hooks");

jest.mock("../../src/hooks/useTodos");

describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos: [
            
            {
                id: 1,
                description: 'Aprender React',
                done: false,
            },
            {
                id: 2,
                description: 'Aprender Mongo',
                done: true,
            }
        
        ],
        todosCount: 0,
        pendingTodosCount: 0,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
    });

    test('Debe de mostrar el componente correctamente', () => {
        


        render(<TodoApp />);
        expect(screen.getByText('Aprender React')).toBeTruthy();
        expect(screen.getByText('Aprender Mongo')).toBeTruthy();
    });
})