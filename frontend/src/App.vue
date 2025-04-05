<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/resumes">简历管理</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-nav {
  padding: 15px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.main-nav a {
  color: #495057;
  text-decoration: none;
  font-weight: bold;
}

.main-nav a.router-link-active {
  color: #007bff;
}
</style>
