<template>
  <div class="page">
    <nav-menu />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavMenu from './components/nav-menu/index.vue'
</script>

<style scoped>

</style>
