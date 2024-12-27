<template>
  <suspense>
    <div class="page min-h-screen flex flex-col">
      <nav-menu />
      <div id="content" class="mt-20 md:mt-0 flex-1">
        <router-view />
      </div>
      <footer-component />
    </div>
  </suspense>
</template>

<script setup lang="ts">
import NavMenu from './components/nav-menu/index.vue';
import FooterComponent from './components/footer/index.vue';
</script>
