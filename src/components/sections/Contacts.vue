<template>
  <section id="contacts" class="mb-5">
    <h2><i class="fas fa-envelope me-2"></i> {{ t('contacts.title') }}</h2>
    <div class="row">
      <div class="col-12">
        <p class="lead">{{ t('contacts.description') }}</p>
        <div class="d-flex flex-wrap gap-4">
          <a href="https://t.me/Tvorobusheck1" target="_blank" class="btn btn-outline-primary btn-lg">
            <i class="fab fa-telegram me-2"></i> @Tvorobusheck1
          </a>
          <a href="mailto:vlad991199@yandex.ru" class="btn btn-outline-primary btn-lg">
            <i class="fas fa-envelope me-2"></i> vlad991199@yandex.ru
          </a>
          <a href="https://github.com/Tvorobusheck" target="_blank" class="btn btn-outline-primary btn-lg">
            <i class="fab fa-github me-2"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'ContactsSection',
  setup() {
    const { t } = useTranslations();
    
    return {
      t
    };
  }
};
</script>

<style scoped>
.btn-outline-primary {
  border-width: 2px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
}

.btn-outline-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn i {
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .btn-outline-primary {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
