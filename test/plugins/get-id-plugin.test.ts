import { getId } from "../../src/plugins/get-id-plugin";

describe('plugins/get-id-plugin', () => {
    test('getId() deberia devolver un UUID', () => {
        const uuid = getId();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36); 
    })

})