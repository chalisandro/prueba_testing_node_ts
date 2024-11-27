import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises', () => {
    test('getPokemonById debe regresar un pokemon', async () => {
        // 1. Arrange: Set up the Pokemon ID and expected result
        const pokemonId = 1;
        // 2. Act: Get the name of the Pokemon by its ID
        const pokemonName = await getPokemonById(pokemonId);
        // 3. Assert: Check that the name of the Pokemon is 'bulbasaur'
        expect(pokemonName).toBe('bulbasaur');
    });

    test('getPokemonById debe regresar Pokemon no existe', async () => {
        // 1. Arramge
        const pokemonId = 1000000000000000000;
        // 2. act
        try {
        await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
        //  expect(error).toBe(`Pokemon no encontrado con el id ${ pokemonId }`); esto saldra error ya que comparamos error y no el mensaje dentro
            expect((error as Error).message).toBe(`Pokemon no encontrado con el id ${ pokemonId }`);
        }
        // 3. assert

    })
});
