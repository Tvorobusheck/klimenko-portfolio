<template>
  <section id="achievements" class="mb-5">
    <h2><i class="fas fa-trophy me-2"></i> {{ t('achievements.title') }}</h2>
    <ul class="list-group">
      <li v-for="(item, index) in t('achievements.items')" :key="index" class="list-group-item">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'AchievementsSection',
  setup() {
    const { t } = useTranslations();
    return { t };
  }
}
</script>
