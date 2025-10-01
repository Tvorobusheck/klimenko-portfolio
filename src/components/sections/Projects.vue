<template>
  <section id="projects" class="mb-5">
    <h2><i class="fas fa-code"></i> Мои проекты</h2>
    <p>Каждый проект создан мной в одиночку.</p>
    
    <div class="project">
      <h3>Проект 1: PWA-приложение ЗдоровоПит </h3>
      <div id="carouselProject1" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
        <div class="carousel-inner">
          <div v-for="(image, index) in healthyEatImages" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
            <img :src="image" class="d-block w-100" :alt="'ЗдоровоПит скриншот ' + (index + 1)" @click="openFullscreen($event)">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselProject1" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Предыдущий</span>
        </a>
        <a class="carousel-control-next" href="#carouselProject1" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Следующий</span>
        </a>
      </div>
      <p>ЗдоровоПит - это удобное приложение для контроля питания доступное на всех платформах. </p>
      Основные функции:
      <ul>
        <li>Регистрация, авторизация и восстановление пароля.</li>
        <li>Оплата через ЮКассу, промокоды и партнерская программа.</li>
        <li>Дневник питания с автозаполнением на основе расписания питания.</li>
        <li>Добавление и просмотр диет с возможностью активации расписания питания.</li>
        <li>Расписание питания.</li>
        <li>Информация о продуктах питания.</li>
      </ul>
      <p><strong>Технологический стек:</strong> Fastapi, Python, Flutter, HTML, CSS, JavaScript, Docker, Nginx, PostgreSQL, Git, OAuth, Youkassa</p>
    </div>

    <div class="project">
      <h3>Проект 2: Сайт для общения с ChatGPT</h3>
      <div id="carouselProject2" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
        <div class="carousel-inner">
          <div v-for="(image, index) in chatGptImages" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
            <img :src="image" class="d-block w-100" :alt="'ChatGPT скриншот ' + (index + 1)" @click="openFullscreen($event)">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselProject2" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Предыдущий</span>
        </a>
        <a class="carousel-control-next" href="#carouselProject2" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Следующий</span>
        </a>
      </div>
      <p>chatgptin.ru позволял общаться с ChatGPT, когда эта нейросеть начинала набирать обороты. Также была поддержка генерации изображений через Dall-E. Технически все хорошо работало и нравилось пользователям. Однако проект пришлось закрыть, так как реклама не окупала затраты на инфраструктуру и api-ключи ChatGPT.</p>
      <p><strong>Технологический стек:</strong> Django, Python, HTML, CSS, JavaScript, Docker, Docker Registry, Docker Swarm, Jenkins, Celery, Redis, WebSocket, Nginx, PostgreSQL, Git</p>
    </div>

    <div class="project">
      <h3>Проект 3: Решатель задачи линейного раскроя</h3>
      <div id="carouselProject3" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
        <div class="carousel-inner">
          <div v-for="(image, index) in robopaperImages" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
            <img :src="image" class="d-block w-100" :alt="'Robopaper скриншот ' + (index + 1)" @click="openFullscreen($event)">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselProject3" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Предыдущий</span>
        </a>
        <a class="carousel-control-next" href="#carouselProject3" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Следующий</span>
        </a>
      </div>
      <p>Данный проект был разработан в рамках моей научной диссертации. По мере развития научных разработок я планирую дорабатывать Robopaper.</p>
      <p><strong>Технологический стек:</strong> Django, Python, HTML, CSS, JavaScript, PostgreSQL</p>
      <a href="https://robopaper.ru" class="btn btn-primary" target="_blank">Опробовать проект</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      healthyEatImages: [
        '/images/healthyeat/registration.png',
        '/images/healthyeat/login.png',
        '/images/healthyeat/pay.png',
        '/images/healthyeat/meal.png',
        '/images/healthyeat/diary.png',
        '/images/healthyeat/schedule.png',
        '/images/healthyeat/diet.png',
        '/images/healthyeat/swagger.png',
        '/images/healthyeat/redoc.png'
      ],
      chatGptImages: [
        '/images/chatgptinru/main.png',
        '/images/chatgptinru/feedback.png',
        '/images/chatgptinru/performance.png',
        '/images/chatgptinru/metrika.png',
        '/images/chatgptinru/panel.png'
      ],
      robopaperImages: [
        '/images/robopaper/main.png',
        '/images/robopaper/feedback.png'
      ]
    }
  },
  methods: {
    openFullscreen(event) {
      const img = event.target;
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.mozRequestFullScreen) {
        img.mozRequestFullScreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
      }
    }
  },
  mounted() {
    // Initialize carousels after component is mounted
    if (typeof $ !== 'undefined') {
      $('.carousel').carousel();
    }
  }
}
</script>
