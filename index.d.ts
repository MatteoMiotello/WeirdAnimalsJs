export = generateWeirdAnimal;

declare function generateWeirdAnimal( language: WeirdAnimals.LanguageSet ): string;

declare namespace WeirdAnimals {
    export enum LanguageSet {
        IT = 'it-IT',
        EN = 'en-EN',
    }
}
