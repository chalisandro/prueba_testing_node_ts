import axios from "axios";
export const httpClientPlugin = {
    get: async (url: string) => {
        const resp = await axios.get(url);
        return await resp.data;

    }
}

