import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Hector',
        email: 'hector@caballero.com'
    };

    test('Debe de regresar los valores por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Debe de cambiar el nombre del formulario', ()=> {
        const newValue = 'Juan';
        // Montar el hook
        const { result } = renderHook( () => useForm(initialForm) );
        // onInputChange
        const { onInputChange } = result.current;
        // act, event...
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
        });
        // expect, result.current.name === Juan
        expect(result.current.name).toBe(newValue);
        // expect, result.current.formState.name === Juan
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe de resetear el formulario', () => {
        const newValue = 'Juan';
        // Montar el hook
        const { result } = renderHook( () => useForm(initialForm) );
        // onInputChange
        const { onInputChange, onResetForm } = result.current;
        // act, event...
        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
            onResetForm();
        });
        // expect, result.current.name === Hector
        expect(result.current.name).toBe(initialForm.name);
        // expect, result.current.formState.name === Hector
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});