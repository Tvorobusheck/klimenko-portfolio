<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">{{ t('nav.name') }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about"><i class="fas fa-user me-1"></i> {{ t('nav.about') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education"><i class="fas fa-graduation-cap me-1"></i> {{ t('nav.education') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#achievements"><i class="fas fa-trophy me-1"></i> {{ t('nav.achievements') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills"><i class="fas fa-tools me-1"></i> {{ t('nav.skills') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects"><i class="fas fa-code me-1"></i> {{ t('nav.projects') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacts"><i class="fas fa-envelope me-1"></i> {{ t('nav.contacts') }}</a>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <button 
            @click="toggleLanguage" 
            class="btn btn-outline-light btn-sm"
            :title="currentLanguage === 'ru' ? 'Switch to English' : 'Переключить на русский'"
          >
            {{ currentLanguage === 'ru' ? '🇬🇧 EN' : '🇷🇺 RU' }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useTranslations } from '@/composables/useTranslations';

export default {
  name: 'Navbar',
  setup() {
    const { t, currentLanguage, toggleLanguage } = useTranslations();
    
    return {
      t,
      currentLanguage,
      toggleLanguage
    };
  }
}
</script>
