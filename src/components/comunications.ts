import { Character } from '../types/character.type';
import { render } from './base';

export function createComunications(
    selector = 'body',
    position: InsertPosition = 'beforeend',
    character: Character,
) {
    const template = `
    <div class="communication on">
        <p class="text">${character.message}</p>
        <img class="picture" src="assets/${character.name}.jpg" alt="Imagen de ${character.name}"
    </div>
    `;

    const element = render(selector, position, template);
    return element;
}
