import { character } from "../../src/js-foundation/02-destructuring";

describe('02-destructuring', () => {
    test('character debe de contener un array', () => {
        // 1. Arramge

        // 2. act

        // 3. assert
        expect(character[0]).toContain('Flash'); // Si queremos buscar los caracteres en orden
        expect(character.length).toBe(4); // Si queremos el numero de objetos dentro del array
        expect(Array.isArray(character)).toBe(true); //Si queremos verificar si es un array
        expect(character).toContain('Batman'); // Si queremos verificar algun objeto dentro del array sin un orden

    })

    test('Character debe de contener primero Flash y luego Superman', () => {
        // 1. Arramge

        // 2. act
        const [Flash, Superman] = character;
        // 3. assert
        expect(Flash).toBe('Flash');
        expect(Superman).toBe('Superman')
    })
})