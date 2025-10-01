<template>
  <div class="portfolio-header">
    <h1>Портфолио Клименко Владислава Викторовича</h1>
    <p>Отдельный привет и пожелание премии HR-специалистам!</p>
    <a href="#about" class="btn btn-primary scroll-btn">Перейти к разделу 'О себе'</a>
    <a href="#about" class="arrow">&#8595;</a>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.portfolio-header {
  background: linear-gradient(to bottom, #1e3c72, #2a5298);
  color: white;
  text-align: center;
  padding: 100px 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio-header h1 {
  font-size: 3rem;
}

.portfolio-header p {
  font-size: 1.5rem;
}

.scroll-btn {
  margin-top: 20px;
  font-size: 1.2rem;
}

.arrow {
  margin-top: auto;
  font-size: 5rem;
  animation: bounce 1s infinite;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

.arrow:hover {
  text-decoration: none;
  color: #f8f9fa;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
