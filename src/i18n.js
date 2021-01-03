import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en';
import vn from './translations/vn';

const resources = {
  en: { translation: en },
  vn: { translation: vn },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: '.',
});

export default i18n;
