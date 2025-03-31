import {vi, describe, test} from 'vitest'

vi.mock('../data/data.json',() => {
    default = [];
});


describe ('Given getCharacter',() -> {
    describe ('When is called',() => {
        test('Then is a array',() => {
            const c= getCharacter();
            asserts(c);
        });
    });
});