import { render } from './base.js';
export function createHeader(
    selector: string = 'body',
    position: InsertPosition = 'beforebegin',
) {
    const template = `
        <header class="header">
            <div class="header_constraint
                <h1 class="header_title">Game of Thrones</h1>
                <img scr="favicon.png" alt="logo de la serie">
            </div>    
            <nav class="header_nav">
                    <li class="header_item"><a href:"#home">
                    <li class="header_item"><a href:"#character">
                    <li class="header item"><a href:"#Familias">
        </header>
    `;

    render(selector, position, template);
}
