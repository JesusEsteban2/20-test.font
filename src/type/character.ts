export type Character = {
    id: string;
    isAlive: boolean;
    message: string;
    name: string;
    family: string;
    age: number;
    reignYears?: number;
    weapon?: string;
    skillLevel?: string;
    adviseTo: Character;
    serveLevel: number;
    servesTo: Character;
    category: 'King' | 'Squire' | 'Adviser' | 'Fighter';
};
