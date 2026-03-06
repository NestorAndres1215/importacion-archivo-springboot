<template>
  <div id="app">
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
}

.text-center {
  text-align: center;
}
</style>