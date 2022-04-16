export = WeirdAnimals;

declare namespace WeirdAnimals {
    export enum LanguageSet {
        IT = 'it-IT',
        EN = 'en-EN',
    }

    export function generateWeirdAnimal( language: WeirdAnimals.LanguageSet ): string;
}
