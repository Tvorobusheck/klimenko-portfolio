import { createApp } from 'vue';
import App from './App.vue';

// Import jQuery and Bootstrap JS
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';

// Make jQuery available globally
window.$ = $;
window.jQuery = $;

// Import Font Awesome
import '@fortawesome/fontawesome-free/js/all';

// Create and mount the Vue app
const app = createApp(App);
app.mount('#app');

// Initialize tooltips and popovers
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});
