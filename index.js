function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateWeirdAnimal( languageSet ) {
    if ( !languageSet  )

    const Language = require( './languages/' + languageSet );
    const languages = new Language();
    return languages.firstWord[ randomNum( 0, languages.firstWord.length ) ] + ' ' + languages.secondWord[ randomNum( 0, languages.secondWord.length ) ];
}

class LanguageSet {
    static IT = 'it-IT';
    static EN = 'en-EN';
}

module.exports = {
    generateWeirdAnimal,
    LanguageSet
}
