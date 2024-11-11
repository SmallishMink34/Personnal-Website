import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';  // Import nécessaire

i18next
  .use(Backend)  
  .use(LanguageDetector)
  .use(initReactI18next)  // Ajoute ce middleware pour React
  .init({
    fallbackLng: 'en',  // Langue par défaut
    debug: true,        // Active le débogage

    backend: {
      loadPath: 'locales/{{lng}}.json',  // Chemin vers le fichier de traduction
    },

    ns: ['translation'],  
    defaultNS: 'translation',
    load: 'languageOnly',  // Ajoute cette ligne pour n'utiliser que la langue sans région
    interpolation: {
      escapeValue: false,
    }
  });

export default i18next;
