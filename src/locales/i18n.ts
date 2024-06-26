import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: {
    default: ['en'],
  },
  fallbackNS: ['translation'],
  debug: false,
});

export default i18n;
