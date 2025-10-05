<template>
  <section id="education" class="mb-5">
    <h2><i class="fas fa-graduation-cap me-2"></i> {{ t('education.title') }}</h2>
    <ul class="list-group">
      <li class="list-group-item">{{ t('education.bachelor') }}</li>
      <li class="list-group-item">{{ t('education.master') }}</li>
    </ul>
  </section>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'EducationSection',
  setup() {
    const { t } = useTranslations();
    return { t };
  }
}
</script>
