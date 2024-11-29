import { getAge } from "../../src/plugins/get-age-plugin";

describe('plugins/get-age-plugin', () => {
    test('getAge deberia ser de tipo numerico', () => {
        const birthdate = '1998-04-17';
        const age = getAge(birthdate)
        
        expect(typeof age).toBe('number')
    })
    test('getAge deberia retornar la edad de 26', () => {
        const birthdate = '1998-04-17';
        const age = getAge(birthdate)

        expect(age).toBe(26)
    })
})