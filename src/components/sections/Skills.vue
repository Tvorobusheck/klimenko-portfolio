<template>
  <section id="skills" class="mb-5">
    <h2><i class="fas fa-tools me-2"></i> {{ t('skills.title') }}</h2>
    <div class="row">
      <div class="col-md-6">
        <h4>{{ t('skills.programming') }}</h4>
        <ul class="list-group">
          <li v-for="(skill, index) in t('skills.programmingItems')" :key="'prog-' + index" class="list-group-item">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h4>{{ t('skills.other') }}</h4>
        <ul class="list-group">
          <li v-for="(skill, index) in t('skills.otherItems')" :key="'other-' + index" class="list-group-item">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'SkillsSection',
  setup() {
    const { t } = useTranslations();
    return { t };
  }
}
</script>
