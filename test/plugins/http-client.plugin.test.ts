import { httpClientPlugin } from "../../src/plugins/http-client";

describe('plugins/http-client', () => {
    test('httpClientPlugin() debe de regresar un cliente', async() => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')
        expect(data).toEqual({
            "userId": expect.any(Number),
            "id": expect.any(Number),
            "title": expect.any(String),
            "completed": expect.any(Boolean)
        })
    })
    test('httpClientPlugin deberia tener los metodos post, put, delete', async() =>{
        // console.log(typeof httpClientPlugin.post);
        expect(typeof httpClientPlugin.post).toBe('function')
        expect(typeof httpClientPlugin.put).toBe('function')
        expect(typeof httpClientPlugin.delete).toBe('function')
        
    })
})

