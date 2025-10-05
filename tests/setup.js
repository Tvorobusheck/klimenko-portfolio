import { config } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { vi } from 'vitest';

// Mock the language store
vi.mock('@/stores/language', () => ({
  useLanguageStore: vi.fn(() => ({
    currentLanguage: 'ru',
    toggleLanguage: vi.fn()
  }))
}));

// Create a fresh pinia instance for each test
const pinia = createPinia();

// Mock the useTranslations composable
vi.mock('@/composables/useTranslations', () => ({
  useTranslations: () => ({
    t: (key) => {
      const translations = {
        'header.title': 'Test Title',
        'header.subtitle': 'Test Subtitle',
        'header.aboutButton': 'About Me',
        'header.contactButton': 'Contact',
        // Add more translations as needed for your tests
      };
      return translations[key] || key;
    },
    currentLanguage: 'ru',
    toggleLanguage: vi.fn()
  })
}));

// Global plugins
config.global.plugins = [pinia];

// Global mocks
config.global.mocks = {
  $t: (key) => key, // Simple translation mock
};
