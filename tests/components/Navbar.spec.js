import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Navbar from '../../src/components/layout/Navbar.vue';

describe('Navbar.vue', () => {
  it('renders navigation links', () => {
    const wrapper = mount(Navbar);
    
    // Check if the brand is rendered
    expect(wrapper.find('.navbar-brand').text()).toContain('Владислав Клименко');
    
    // Check if navigation links are rendered
    const navLinks = wrapper.findAll('.nav-link');
    expect(navLinks.length).toBeGreaterThan(0);
    
    // Check for specific navigation items
    const expectedLinks = ['Главная', 'Обо мне', 'Образование', 'Навыки', 'Проекты', 'Контакты'];
    navLinks.wrappers.forEach((link, index) => {
      if (index < expectedLinks.length) {
        expect(link.text()).toContain(expectedLinks[index]);
      }
    });
  });

  it('toggles mobile menu', async () => {
    // Mock window.innerWidth for mobile view
    global.innerWidth = 500;
    
    const wrapper = mount(Navbar);
    const navbarToggler = wrapper.find('.navbar-toggler');
    
    // Check if mobile menu is initially closed
    const mobileMenu = wrapper.find('.navbar-collapse');
    expect(mobileMenu.classes()).toContain('collapse');
    
    // Toggle menu
    await navbarToggler.trigger('click');
    
    // Check if menu is open (class 'show' is added)
    // Note: You might need to adjust this based on your actual implementation
    expect(wrapper.find('.navbar-collapse').classes('show')).toBe(true);
  });
});
