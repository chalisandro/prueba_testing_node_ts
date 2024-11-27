import exp from "constants";
import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {
    const getId = () => '1234';
    const getAge = () => 26
    test('buildMakePerson debe retornar una funcion', () =>{
        // 1. Arramge
        const makePerson = buildMakePerson({getId , getAge});
        // 2. act
        
        // 3. assert
        expect(typeof makePerson).toBe('function')
    })
    test('makePerson debe retornar una persona', () => {
        // 1. Arramge
        const makePerson = buildMakePerson({getId , getAge});
        // 2. act
        const persona1 = makePerson({name: 'Alisandro', birthdate: '1998-04-17'})
        // 3. assert
        expect(persona1).toEqual({
            id: '1234',
            name: 'Alisandro',
            birthdate: '1998-04-17',
            age: 26
        })
    })
})