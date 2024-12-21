<template>
  <div class="page min-h-screen flex flex-col">
    <nav-menu />
    <div id="content" class="mt-20 md:mt-0 flex-1">
      <router-view />
    </div>
    <footer-component />
  </div>
</template>

<script setup lang="ts">
import NavMenu from './components/nav-menu/index.vue';
import FooterComponent from './components/footer/index.vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();

watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
);
</script>
