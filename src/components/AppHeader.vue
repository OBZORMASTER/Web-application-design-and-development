<template>
  <header class="app-header">
    <nav class="nav">
      <router-link to="/" class="logo">DOOM Workshop</router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Головна</router-link>
        <router-link to="/items" class="nav-link">Артефакти</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.app-header {
  background-color: #135313ff;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #1b751bff;
}

.router-link-active {
  background-color: #0e360eff;
}
</style>