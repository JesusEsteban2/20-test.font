import { Character } from '../types/character.type.js';
import { createCharacter } from './character';

describe('Given createCharacter function', () => {
    describe('When called with valid parameters', () => {
        //Arrange
        const selector = 'body';
        const position = 'beforeend';
        const character: Character = {
            id: 1,
        } as Character;
        test('Then the component should be in the screen', () => {
            //Act
            createCharacter(selector, position, character);
        });
    });
});
