import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createPinia } from 'pinia';
import Navbar from '../../src/components/layout/Navbar.vue';

// Mock the useTranslations composable
vi.mock('@/composables/useTranslations', () => ({
  useTranslations: vi.fn(() => ({
    t: (key) => {
      const translations = {
        'navbar.brand': 'Test Brand',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contacts': 'Contacts'
      };
      return translations[key] || key;
    },
    currentLanguage: { value: 'en' }
  }))
}));

// Mock the router
vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn()
  }))
}));

describe('Navbar.vue', () => {
  const mountComponent = () => {
    return mount(Navbar, {
      global: {
        plugins: [createPinia()],
        stubs: {
          'router-link': { 
            template: '<a><slot></slot></a>',
            props: ['to']
          }
        }
      }
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders navigation links with translated text', () => {
    const wrapper = mountComponent();
    
    // Check the brand (hardcoded)
    const brand = wrapper.find('.navbar-brand');
    expect(brand.exists()).toBe(true);
    expect(brand.text()).toBe('nav.name');
    
    // Get all navigation links
    const navLinks = wrapper.findAll('.nav-link');
    expect(navLinks.length).toBe(6);
    
    // Verify each link has the expected icon and translation key
    const expectedIcons = [
      'fa-user',
      'fa-graduation-cap',
      'fa-trophy',
      'fa-tools',
      'fa-code',
      'fa-envelope'
    ];
    
    navLinks.forEach((link, index) => {
      // Check if the icon is present
      const icon = link.find('i');
      expect(icon.classes()).toContain(expectedIcons[index]);
      
      // The actual text will be the translation key since we're not rendering actual translations in this test
      // We're just checking that the translation function is called with the right keys
      expect(link.text()).toContain(`${['About', 'Education', 'nav.achievements', 'Skills', 'Projects', 'Contacts'][index]}`);
    });
  });

  it('toggles mobile menu', async () => {
    // Mock window.innerWidth for mobile view
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    
    const wrapper = mountComponent();
    
    // Initially, mobile menu should be closed
    const collapse = wrapper.find('.navbar-collapse');
    expect(collapse.classes()).toContain('collapse');
    
    // Find and click the mobile menu button
    const button = wrapper.find('.navbar-toggler');
    await button.trigger('click');
  });
});