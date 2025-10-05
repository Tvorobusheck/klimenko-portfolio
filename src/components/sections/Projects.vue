<template>
  <section id="projects" class="mb-5">
    <h2><i class="fas fa-code me-2"></i> {{ t('projects.title') }}</h2>
    
    <div v-for="(project, index) in t('projects.items')" :key="index" class="project mb-5">
      <h3>{{ project.title }}</h3>
      
      <div v-if="project.images" :id="'carouselProject' + index" class="carousel slide mb-3" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
        <div class="carousel-inner">
          <div v-for="(image, imgIndex) in project.images" :key="imgIndex" :class="['carousel-item', { 'active': imgIndex === 0 }]">
            <img :src="image" class="d-block w-100" :alt="project.title + ' screenshot ' + (imgIndex + 1)">
          </div>
        </div>
        <button v-if="project.images.length > 1" class="carousel-control-prev" type="button" :data-bs-target="'#carouselProject' + index" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ t('projects.previous') }}</span>
        </button>
        <button v-if="project.images.length > 1" class="carousel-control-next" type="button" :data-bs-target="'#carouselProject' + index" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">{{ t('projects.next') }}</span>
        </button>
      </div>
      
      <p v-html="project.description"></p>
      <p v-if="project.technologies"><strong>{{ t('projects.technologies') }}:</strong> {{ project.technologies }}</p>
    </div>
  </section>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'ProjectsSection',
  setup() {
    const { t } = useTranslations();
    
    const healthyEatImages = [
      '/images/healthyeat/registration.png',
      '/images/healthyeat/login.png',
      '/images/healthyeat/pay.png',
      '/images/healthyeat/meal.png',
      '/images/healthyeat/diary.png',
      '/images/healthyeat/schedule.png',
      '/images/healthyeat/diet.png',
      '/images/healthyeat/swagger.png',
      '/images/healthyeat/redoc.png'
    ];
    
    const chatGptImages = [
      '/images/chatgptinru/main.png',
      '/images/chatgptinru/feedback.png',
      '/images/chatgptinru/performance.png',
      '/images/chatgptinru/metrika.png',
      '/images/chatgptinru/panel.png'
    ];
    
    const robopaperImages = [
      '/images/robopaper/main.png',
      '/images/robopaper/feedback.png'
    ];

    return {
      t,
      healthyEatImages,
      chatGptImages,
      robopaperImages
    };
  },
  methods: {},
  mounted() {
    // Initialize Bootstrap carousels
    import('bootstrap/js/dist/carousel').then(({ Carousel }) => {
      document.querySelectorAll('.carousel').forEach(carouselEl => {
        new Carousel(carouselEl);
      });
    });
  }
};
</script>

<style scoped>
.project {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  color: #212529; /* Default text color for light mode */
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .project {
    background: #2d2d2d;
    color: #f8f9fa; /* Light text color for dark mode */
  }
  
  .project h3,
  .project p,
  .project .text-muted {
    color: #f8f9fa !important; /* Force light text in dark mode */
  }
}

.carousel {
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
}

.carousel-item img {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.carousel-item img:hover {
  transform: scale(1.02);
}

.btn {
  margin-top: 1rem;
}
</style>
