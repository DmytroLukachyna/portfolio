import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import languageEN from './locales/en-US/translate.json';
import languageUA from './locales/uk-UA/translate.json';

// for all options read: https://www.i18next.com/overview/configuration-options
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en-US', 'uk-UA'],
    resources: {
      'en-US': languageEN,
      'uk-UA': languageUA,
    },
    fallbackLng: 'en-US',
    debug: false,
  });

export default i18n;
