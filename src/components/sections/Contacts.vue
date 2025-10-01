<template>
  <section id="contacts" class="mb-5">
    <h2><i class="fas fa-envelope me-2"></i> {{ t('contacts.title') }}</h2>
    <div class="row">
      <div class="col-md-6">
        <p>{{ t('contacts.description') }}</p>
        <ul class="list-unstyled">
          <li class="mb-2">
            <i class="fab fa-telegram me-2"></i> 
            <a href="https://t.me/Tvorobusheck1" target="_blank" class="text-decoration-none">
              @Tvorobusheck1
            </a>
          </li>
          <li class="mb-2">
            <i class="fas fa-envelope me-2"></i> 
            <a href="mailto:vlad991199@yandex.ru" class="text-decoration-none">
              vlad991199@yandex.ru
            </a>
          </li>
          <li class="mb-2">
            <i class="fab fa-github me-2"></i> 
            <a href="https://github.com/Tvorobusheck" target="_blank" class="text-decoration-none">
              github.com/Tvorobusheck
            </a>
          </li>
          <li class="mb-2">
            <i class="fab fa-linkedin me-2"></i> 
            <a href="https://linkedin.com/in/tvorobusheck" target="_blank" class="text-decoration-none">
              linkedin.com/in/tvorobusheck
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">{{ t('contacts.form.name') }}</label>
            <input 
              type="text" 
              class="form-control" 
              id="name" 
              v-model="form.name"
              :placeholder="t('contacts.form.namePlaceholder')" 
              required
            >
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">{{ t('contacts.form.email') }}</label>
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              v-model="form.email"
              :placeholder="t('contacts.form.emailPlaceholder')" 
              required
            >
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">{{ t('contacts.form.message') }}</label>
            <textarea 
              class="form-control" 
              id="message" 
              rows="4" 
              v-model="form.message"
              :placeholder="t('contacts.form.messagePlaceholder')" 
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            {{ t('contacts.form.submit') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'ContactsSection',
  setup() {
    const { t } = useTranslations();
    
    const form = ref({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = () => {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', form.value);
      alert(t('contacts.form.successMessage'));
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        message: ''
      };
    };

    return {
      t,
      form,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.list-unstyled li {
  margin-bottom: 0.5rem;
}

a {
  color: #0d6efd;
  transition: color 0.2s;
}

a:hover {
  color: #0a58ca;
  text-decoration: none;
}

.form-control:focus {
  border-color: #86b7fe;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
</style>
