<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Клименко</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#about"><i class="fas fa-user"></i> О себе</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#education"><i class="fas fa-graduation-cap"></i> Образование</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#achievements"><i class="fas fa-trophy"></i> Достижения</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills"><i class="fas fa-tools"></i> Навыки</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects"><i class="fas fa-code"></i> Мои проекты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacts"><i class="fas fa-envelope"></i> Контакты</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
