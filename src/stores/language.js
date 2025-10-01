import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref('ru');
  
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'ru' ? 'en' : 'ru';
  };

  return {
    currentLanguage,
    toggleLanguage,
    isRussian: computed(() => currentLanguage.value === 'ru'),
    isEnglish: computed(() => currentLanguage.value === 'en')
  };
});
