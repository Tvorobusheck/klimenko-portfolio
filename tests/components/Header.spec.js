import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { createPinia } from 'pinia';
import Header from '../../src/components/Header.vue';

describe('Header.vue', () => {
  const mountComponent = () => {
    return mount(Header, {
      global: {
        plugins: [createPinia()]
      }
    });
  };

  it('renders the header with title and buttons', () => {
    const wrapper = mountComponent();
    
    // Check if the title is rendered
    expect(wrapper.find('h1').text()).toBe('Test Title');
    
    // Check if the subtitle is rendered
    expect(wrapper.find('.lead').text()).toBe('Test Subtitle');
    
    // Check if buttons are rendered
    const buttons = wrapper.findAll('.btn');
    expect(buttons.length).toBe(2);
    
    // Check for specific buttons
    const buttonTexts = buttons.map(btn => btn.text());
    expect(buttonTexts).toContain('About Me');
    expect(buttonTexts).toContain('Contact');
  });
});
