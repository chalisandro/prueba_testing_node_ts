"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((resp) => {
        if (!resp.ok) {
            throw new Error('Pokemon no existe'); // Lanzar error si el status no es OK (ej. 404)
        }
        return resp.json(); // Parsear la respuesta si el status es OK
    })
        .then((pokemon) => pokemon.name) // Devolver el nombre del Pokémon
        .catch((error) => {
        // Eliminamos el console.error, solo relanzamos el error
        throw error = new Error(`Pokemon no encontrado con el id ${id}`);
    });
};
exports.getPokemonById = getPokemonById;
