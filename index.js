import {EN, IT} from "./library/LanguagesSet.js";
import {itIT} from "./languages/it-IT.js";
import {enEN} from "./languages/en-EN.js";

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generate = ( languageSet = EN ) => {
    let languages = null;
    switch (languageSet) {
        case IT:
           languages = new itIT();
            break;
        case EN:
            languages = new enEN();
            break;
        default:
            throw new Error('Language not found');
    }

    return languages.firstWord[ randomNum( 0, languages.firstWord.length ) ] + ' ' + languages.secondWord[ randomNum( 0, languages.secondWord.length ) ];
}

module.exports = generate;
