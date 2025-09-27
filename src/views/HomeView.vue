<script setup>
// This will be our home page content
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="portfolio-header">
      <h1>Портфолио Клименко Владислава Викторовича</h1>
      <p>Отдельный привет и пожелание премии HR-специалистам!</p>
      <a href="#about" class="btn btn-primary btn-lg scroll-btn">Перейти к разделу 'О себе'</a>
      <a href="#about" class="arrow">↓</a>
    </section>

    <!-- About Section -->
    <section id="about" class="container py-5">
      <h2><i class="fas fa-user"></i> О себе</h2>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <p>Я профессиональный разработчик, специализирующийся на веб-программировании, уже около 5 лет я работаю программистом. Мне нравится создавать код, который решает проблемы клиентов и создает прибыль компании.</p>
          <p>Помимо программирования я обучаюсь в аспирантуре и занимаюсь наукой в области алгоритмов. Тема моей диссертации - это решение задачи линейного раскроя. Также я являюсь действующим преподавателем Петрозаводского государственного университета и преподаю алгоритмы и структуры данных.</p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5"><i class="fas fa-code"></i> Мои проекты</h2>
        
        <!-- Project 1 -->
        <div class="card mb-5">
          <div class="row g-0">
            <div class="col-md-6">
              <div id="project1Carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/images/project1-1.jpg" class="d-block w-100" alt="Project 1 Screenshot 1">
                  </div>
                  <!-- Add more carousel items as needed -->
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h3 class="card-title">Проект 1: PWA-приложение ЗдоровоПит</h3>
                <p class="card-text">Описание проекта...</p>
                <a href="#" class="btn btn-primary">Подробнее</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="card mb-5">
          <div class="row g-0">
            <div class="col-md-6 order-md-2">
              <div id="project2Carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/images/project2-1.jpg" class="d-block w-100" alt="Project 2 Screenshot 1">
                  </div>
                  <!-- Add more carousel items as needed -->
                </div>
              </div>
            </div>
            <div class="col-md-6 order-md-1">
              <div class="card-body">
                <h3 class="card-title">Проект 2: Сайт для общения с ChatGPT</h3>
                <p class="card-text">Описание проекта...</p>
                <a href="#" class="btn btn-primary">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacts Section -->
    <section id="contacts" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5"><i class="fas fa-envelope"></i> Контакты</h2>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Свяжитесь со мной</h5>
                <p class="card-text">Email: example@example.com</p>
                <p class="card-text">Телефон: +7 (XXX) XXX-XX-XX</p>
                <div class="social-links mt-3">
                  <a href="#" class="btn btn-outline-primary me-2"><i class="fab fa-github"></i> GitHub</a>
                  <a href="#" class="btn btn-outline-primary me-2"><i class="fab fa-linkedin"></i> LinkedIn</a>
                  <a href="#" class="btn btn-outline-primary"><i class="fab fa-telegram"></i> Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-header {
  background: linear-gradient(to bottom, #1e3c72, #2a5298);
  color: white;
  text-align: center;
  padding: 100px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio-header h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.portfolio-header p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.arrow {
  margin-top: 2rem;
  font-size: 3rem;
  color: white;
  text-decoration: none;
  animation: bounce 2s infinite;
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

section {
  padding: 80px 0;
}

.card {
  border: none;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.carousel-item img {
  height: 100%;
  object-fit: cover;
  min-height: 300px;
}
</style>
