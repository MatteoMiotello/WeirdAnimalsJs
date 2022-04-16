import {itIT} from "./languages/it-IT.js";
import {enEN} from "./languages/en-EN.js";

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateWeirdAnimal( languageSet ) {
    let languages = null;
    switch (languageSet) {
        case LanguageSet.IT:
           languages = new itIT();
            break;
        case LanguageSet.EN:
            languages = new enEN();
            break;
        default:
            throw new Error('Language not found');
    }

    return languages.firstWord[ randomNum( 0, languages.firstWord.length ) ] + ' ' + languages.secondWord[ randomNum( 0, languages.secondWord.length ) ];
}

export class LanguageSet {
    static IT = 'it-IT';
    static EN = 'en-EN';
}
