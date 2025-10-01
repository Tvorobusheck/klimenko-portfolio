<script>
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
  mounted() {
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
        }
      });
    });
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
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';

body {
  background-color: #f8f9fa;
  padding-top: 60px; /* Отступ для шапки */
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.project {
  margin-bottom: 30px;
}

.project img {
  max-width: 100%;
  height: auto;
  cursor: pointer;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

section {
  padding: 5px;
  margin-top: 30px;
}

h2 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee2e6;
}

.list-group-item {
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 5px;
  border-radius: 5px !important;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.btn-primary {
  background-color: #1e3c72;
  border-color: #1e3c72;
}

.btn-primary:hover {
  background-color: #2a5298;
  border-color: #2a5298;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .portfolio-header h1 {
    font-size: 2rem !important;
  }
  
  .portfolio-header p {
    font-size: 1.2rem !important;
  }
  
  .arrow {
    font-size: 3rem !important;
  }
}
</style>
