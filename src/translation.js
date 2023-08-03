// translations.js
import enTranslation from "../src/lang/en.json";
import frTranslation from "../src/lang/fr.json";

const translations = {
    en: enTranslation,
    fr: frTranslation,
};

export function getTranslation(language) {
    return translations[language];
}
