<template>
  <section id="achievements" class="mb-5">
    <h2><i class="fas fa-trophy me-2"></i> {{ t('achievements.title') }}</h2>
    <ul class="list-group">
      <li v-for="(item, index) in achievements" :key="index" class="list-group-item" v-html="item">
      </li>
    </ul>
  </section>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';
import { computed } from 'vue';

export default {
  name: 'AchievementsSection',
  setup() {
    const { t, currentLanguage } = useTranslations();
    
    const achievements = computed(() => {
      if (currentLanguage.value === 'ru') {
        return [
          '5 лет работы в ИТ',
          'Именная стипендия Республики Карелия за научные достижения',
          'Участие в полуфинале чемпионата мира по олимпиадному программированию (<a href="https://neerc.ifmo.ru/archive/2018/standings.html" target="_blank" rel="noopener noreferrer">ICPC 2018</a>)',
          'Научные публикации и конференции, включая международные (<a href="https://www.researchgate.net/profile/Vladislav-Klimenko" target="_blank" rel="noopener noreferrer">ResearchGate</a>, <a href="https://orcid.org/0009-0000-0783-7565" target="_blank" rel="noopener noreferrer">ORCID</a>)',
          'Преподавание в университете',
          'Опыт предпринимательства'
        ];
      } else {
        return [
          '5 years of experience in IT',
          'Named scholarship of the Republic of Karelia for scientific achievements',
          'Participation in the semifinals of the International Collegiate Programming Contest (<a href="https://neerc.ifmo.ru/archive/2018/standings.html" target="_blank" rel="noopener noreferrer">ICPC 2018</a>)',
          'Scientific publications and conferences, including international ones (<a href="https://www.researchgate.net/profile/Vladislav-Klimenko" target="_blank" rel="noopener noreferrer">ResearchGate</a>, <a href="https://orcid.org/0009-0000-0783-7565" target="_blank" rel="noopener noreferrer">ORCID</a>)',
          'University teaching',
          'Entrepreneurship experience'
        ];
      }
    });

    return { 
      t,
      achievements
    };
  }
}
</script>
