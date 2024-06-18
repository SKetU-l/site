<template>
  <App>
    <header>
      <AppNavbar />
    </header>
    <main>
      <NuxtPage />
    </main>
  </App>
</template>

<script setup></script>
<style>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 40px;
}

.hero-content {
  max-width: 550px;
}

.hero-content h1 {
  font-size: 3rem;
  margin: 0;
  color: #c0b7e8;
}

.hero-content h1 span {
  color: #8c34e8;
}

.hero-content p {
  font-size: 1.2rem;
  color: #c0b7e8;
}

.hero-content p span {
  color: #8c34e8;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.learn-more-btn {
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg, #8176af, #c0b7e8);
  color: #343045;
  padding: 10px 20px;
  border-radius: 17px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 28px;
  border: none;
  overflow: show;
  width: 80px;
  height: 15px;
  line-height: 15px;
}

.learn-more-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}

.learn-more-btn:hover::before {
  opacity: 1;
}

.button-arrow {
  position: absolute;
  width: 75px;
  height: 75px;
  left: 160px;
  top: 372px;
}
</style>
