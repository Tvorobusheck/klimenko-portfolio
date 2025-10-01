<script>
import { onMounted } from 'vue';
import { useLanguageStore } from './stores/language';
import Navbar from './components/layout/Navbar.vue';
import Header from './components/Header.vue';
import AboutSection from './components/sections/About.vue';
import EducationSection from './components/sections/Education.vue';
import AchievementsSection from './components/sections/Achievements.vue';
import SkillsSection from './components/sections/Skills.vue';
import ProjectsSection from './components/sections/Projects.vue';
import ContactsSection from './components/sections/Contacts.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    AboutSection,
    EducationSection,
    AchievementsSection,
    SkillsSection,
    ProjectsSection,
    ContactsSection
  },
  setup() {
    const languageStore = useLanguageStore();
    
    // Load saved language preference from localStorage
    onMounted(() => {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'en')) {
        languageStore.currentLanguage = savedLanguage;
      }
      
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          const navbarHeight = document.querySelector('.navbar').offsetHeight;

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - navbarHeight,
              behavior: 'smooth'
            });
            
            // Update URL without page reload
            if (targetId !== '#') {
              history.pushState(null, '', targetId);
            }
          }
        });
      });
      
      // Handle back/forward navigation
      window.addEventListener('popstate', () => {
        const hash = window.location.hash;
        if (hash) {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({
              top: targetElement.offsetTop - navbarHeight,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return {};
  }
};
</script>

<template>
  <div id="app">
    <Navbar />
    <Header />
    <div class="container">
      <AboutSection />
      <EducationSection />
      <AchievementsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
    </div>
  </div>
</template>

<style>
/* Bootstrap 5 CSS is imported in main.js */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';

:root {
  --primary-color: #1e3c72;
  --primary-hover: #2a5298;
  --secondary-color: #6c757d;
  --light-color: #f8f9fa;
  --dark-color: #212529;
  --border-color: #dee2e6;
  --shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --transition: all 0.3s ease;
}

body {
  background-color: var(--light-color);
  padding-top: 60px; /* Space for fixed navbar */
  color: var(--dark-color);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--primary-color);
}

h2 {
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary-color);
  display: inline-block;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff !important;
}

.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color) !important;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  transition: var(--transition);
}

/* Sections */
section {
  padding: 4rem 0;
  position: relative;
  background-color: #fff;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

/* Buttons */
.btn {
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-primary:hover, .btn-primary:focus {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.btn-outline-primary {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-outline-primary:hover, .btn-outline-primary:focus {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

/* Project cards */
.project-card {
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: var(--transition);
  margin-bottom: 2rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.project-img {
  height: 200px;
  object-fit: cover;
}

/* Skills */
.skill-item {
  margin-bottom: 1.5rem;
}

.skill-name {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Contact form */
.form-control {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.25rem rgba(30, 60, 114, 0.25);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  section {
    padding: 2rem 0;
  }
  
  h1 {
    font-size: 2rem !important;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #f8f9fa;
  }
  
  section {
    background-color: #1e1e1e;
    color: #f8f9fa;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #fff;
  }
  
  .navbar {
    background-color: #1a1a1a !important;
  }
  
  .card {
    background-color: #2d2d2d;
    color: #f8f9fa;
  }
  
  .form-control {
    background-color: #2d2d2d;
    border-color: #444;
    color: #f8f9fa;
  }
  
  .form-control:focus {
    background-color: #2d2d2d;
    color: #f8f9fa;
  }
}
</style>
