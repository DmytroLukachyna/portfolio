import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import languageEN from './locales/en-US/translate.json';
import languageUA from './locales/uk-UA/translate.json';
import languageHU from './locales/hu-HU/translate.json';
import languageRU from './locales/ru-RU/translate.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    supportedLngs: ['en-US', 'uk-UA', 'hu-HU', 'ru-RU'],
    resources: {
      'en-US': languageEN,
      'uk-UA': languageUA,
      'hu-HU': languageHU,
      'ru-RU': languageRU,
    },
    fallbackLng: 'en-US',
    debug: false,
  });

// i18n
//     defaultNS: 'translations', -----
//     keySeparator: '.', -----
//     interpolation: {
//       formatSeparator: ',', -----
//     },
//     react: {
//       bindI18n: 'languageChanged loaded', -----
//       nsMode: 'default', -----
//     },
//   }, () => {});

export default i18n;
