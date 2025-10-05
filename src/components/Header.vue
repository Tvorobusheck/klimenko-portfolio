<template>
  <header class="portfolio-header text-center py-5 mb-4">
    <div class="container">
      <h1 class="display-4">{{ t('header.title') }}</h1>
      <p class="lead">{{ t('header.subtitle') }}</p>
      <div class="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
        <a href="#about" class="btn btn-primary btn-lg">
          <i class="fas fa-user me-2"></i> {{ t('header.aboutButton') }}
        </a>
        <a href="#contacts" class="btn btn-outline-light btn-lg">
          <i class="fas fa-envelope me-2"></i> {{ t('header.contactButton') }}
        </a>
      </div>
      <div class="mt-5">
        <a href="#about" class="arrow">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'Header',
  setup() {
    const { t } = useTranslations();
    return { t };
  }
}
</script>

<style scoped>
.portfolio-header {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
  margin-top: 0;
}

.portfolio-header h1 {
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 2.8rem;
  line-height: 1.2;
}

.portfolio-header .lead {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.portfolio-header .btn {
  margin: 0 10px;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.portfolio-header .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.portfolio-header .btn i {
  margin-right: 8px;
}

.arrow {
  color: white;
  font-size: 2.5rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  display: inline-block;
  animation: bounce 2s infinite;
  text-decoration: none;
}

.arrow:hover {
  opacity: 1;
  transform: translateY(5px);
  animation: none;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .portfolio-header {
    padding: 80px 0;
  }
  
  .portfolio-header h1 {
    font-size: 2.2rem;
  }
  
  .portfolio-header .lead {
    font-size: 1.2rem;
  }
  
  .portfolio-header .btn {
    display: block;
    margin: 10px auto;
    max-width: 200px;
  }
}
</style>
