import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// Import Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Font Awesome
import '@fortawesome/fontawesome-free/js/all';

// Create app
const app = createApp(App);

// Use Pinia
const pinia = createPinia();
app.use(pinia);

// Mount the app
app.mount('#app');
