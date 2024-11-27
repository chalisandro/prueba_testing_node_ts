import { error } from "console";
import { getUserByid } from "../../src/js-foundation/03-callbacks";
 describe('js-fundation/03-callbacks.ts', () => {
    test('getUserByid deberia retornar un error si el usuario no existe', (done) => {
        // 1. Arramge
        const id = 10;
        // 2. act
        
        // 3. assert
        getUserByid( id, (err, user) => {
            expect(err).toBe(`Usuario no encontrado con el id: ${id}`);
            expect(user).toBeUndefined();
            done();
        })

    })
 })