// Arrange -- Act -- Assert

describe('Test in the App.test.ts file', () => {
    test('should be 30', () => {
        // 1. Arramge  (Ordenar nuestro sujeto de pruebas)
        const num1 = 10;
        const num2 = 20;
        // 2. Act   (Aplicar estimulos)
        const resultado = num1 + num2;
        // 3. Assert    (esperar resultados)
        expect(resultado).toBe(30);
    })
})