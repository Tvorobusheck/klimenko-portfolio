import { useTranslations } from '@/composables/useTranslations';
import { createPinia, setActivePinia } from 'pinia';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('useTranslations', () => {
  // Mock the language store
  vi.mock('@/stores/language', () => ({
    useLanguageStore: vi.fn(() => ({
      currentLanguage: 'ru',
      toggleLanguage: vi.fn()
    }))
  }));

  // Mock the translations
  vi.mock('@/i18n/translations', () => ({
    default: {
      ru: {
        header: {
          title: 'Test Title',
          subtitle: 'Test Subtitle'
        }
      }
    }
  }));

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it('should translate a simple key', () => {
    const { t } = useTranslations();
    expect(t('header.title')).toBe('Test Title');
  });

  it('should return the key if translation is not found', () => {
    const { t } = useTranslations();
    expect(t('non.existent.key')).toBe('non.existent.key');
  });

});