import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, 
  },
  resources: {
    en: {
      translation: {
        welcome: 'Hello, Welcome!',
        language: 'Language',
      },
    },
    ar: {
      translation: {
        welcome: 'مرحبًا، أهلا بك!',
        language: 'اللغة',
      },
    },
  },
});

export default i18n;
