import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import mr from './locales/mr';

const LANGUAGE_STORAGE_KEY = 'seva-kendra-language';
const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en';

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mr: { translation: mr }
  },
  lng: savedLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  returnObjects: true
});

i18n.on('languageChanged', (language) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.documentElement.lang = language === 'mr' ? 'mr' : 'en';
});

document.documentElement.lang = savedLanguage === 'mr' ? 'mr' : 'en';

export default i18n;