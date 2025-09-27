<script setup>
// This will be our main app component
</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Портфолио Клименко</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">О себе</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Навыки</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Проекты</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacts">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-dark text-white text-center py-4">
      <div class="container">
        <p>&copy; 2023 Портфолио Клименко В.В. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Global styles */
body {
  padding-top: 56px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Navigation */
.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

/* Main content */
main {
  min-height: calc(100vh - 180px);
}

/* Footer */
footer {
  margin-top: auto;
}
</style>
