import axios from "axios";
import { error } from "console";
export const httpClientPlugin = {
    get: async (url: string) => {
        const resp = await axios.get(url);
        return await resp.data;

    },
    post: async(url: string, body: any)=> {
        throw new Error('No implementado');
    },
    put: async(url: string, body: any)=> {
        throw new Error('No implementado');
    },
    delete: async(url: string, body: any)=> {
        throw new Error('No implementado');
    }
}

