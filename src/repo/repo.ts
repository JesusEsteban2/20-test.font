
import DATA from '../../data/data.json' // with {type: 'json'};
import {Character} from '../type/character.js' ;

export const getCharacter = async () => {
    const data: Character = DATA as unknown as Character;
    return data;
}