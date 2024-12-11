import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './English';
import es from './Spanish';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGES = {
  en,
  es,
};

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    try {
      const language = await AsyncStorage.getItem('user-language');
      if (!language) {
        callback('en');
      } else {
        callback(language);
      }
    } catch (err) {
      callback('en');
    }
  },
  init: () => {},
  cacheUserLanguage: async language => {
    try {
      await AsyncStorage.setItem('user-language', language);
    } catch (err) {
      console.log('Error storing language in AsyncStorage');
    }
  },
};

i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
  });

export default i18n;
