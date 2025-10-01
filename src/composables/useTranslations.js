import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
import translations from '@/i18n/translations';

export const useTranslations = () => {
  const languageStore = useLanguageStore();
  
  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : key), translations[languageStore.currentLanguage]);
  };

  return {
    t,
    currentLanguage: computed(() => languageStore.currentLanguage),
    toggleLanguage: languageStore.toggleLanguage
  };
};
