<template>
  <nav class="nav-menu">
    {{ active }}
    <ul>
      <router-link v-for="mi in menuItems" :to="mi.url" :class="active === mi.url">{{ mi.name }}</router-link>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/praesidium',
    name: 'Praesidium',
  },
  {
    url: '/clubs',
    name: 'Clubs',
  },
  {
    url: '/contact',
    name: 'Contact',
  },
]

const active = computed(() => {
  return menuItems.find(v => v.url === route.path)?.url;
});
</script>

<style scoped>
.nav-menu {
  height: 4.5rem;
  width: 100vw;
  background-color: white;
}

.router-link-active {
  color: black;
}
</style>