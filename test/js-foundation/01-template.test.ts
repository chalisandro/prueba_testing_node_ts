import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template', () => {
    test('emailTemplate debe de contener un mensaje',() => {
        // 1. Arramge

        // 2. act

        // 3. assert
        expect(emailTemplate).toContain('Hi, ');
    })

    test('emailTemplate debe de contener {$name} y el {{orderID}}', () => {
        // 1. Arramge

        // 2. act

        // 3. assert
        expect(emailTemplate).toContain('{name}');
        expect(emailTemplate).toContain('{{orderID}}')
    })
})
