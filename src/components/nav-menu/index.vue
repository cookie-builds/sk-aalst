<template>
  <nav class="flex justify-center items-center bg-white text-blue-950 h-20 md:h-24 w-full shadow-md fixed md:relative z-20">
    <!-- Desktop Menu -->
    <ul class="hidden md:flex justify-center items-center gap-4 w-full">
      <div class="flex flex-1 gap-4 justify-end">
        <li v-for="mi in menuItems.slice(0, 3)" :key="mi.url">
          <router-link class="desktop py-4" :to="mi.url" :class="active === mi.url">{{ mi.name }}</router-link>
        </li>
      </div>
      <router-link class="desktop no-after m-auto" to="/">
        <img class="h-20 w-20 mx-4" src="/assets/sk-logo.png" />
      </router-link>
      <div class="flex flex-1 gap-4">
        <li v-for="mi in menuItems.slice(3, 5)" :key="mi.url">
          <router-link class="desktop py-4" :to="mi.url" :class="active === mi.url">{{ mi.name }}</router-link>
        </li>
      </div>
    </ul>

    <!-- Mobile Menu -->
    <div class="flex items-center justify-between md:hidden w-full px-4">
      <router-link to="">
        <img src="/assets/sk-logo.png" class="h-16 w-16" />
      </router-link>
      <Bars3Icon class="h-8 w-8 hover:cursor-pointer" @click="isMobileMenuOpen = !isMobileMenuOpen"/>
    </div>

  </nav>
  <!-- Sidebar -->
  <div class="flex md:hidden w-60 h-screen fixed z-10 transition-all duration-[400ms] bg-slate-300 mt-20" :class="isMobileMenuOpen ? 'shadow-md right-0' : '-right-full'">
    <ul class="w-full flex flex-col">
      <li key="home" class="w-full">
        <router-link class="mobile p-4 block" to="/">
          Home
        </router-link>
      </li>
      <li v-for="mi in menuItems" :key="mi.url" class="w-full">
        <router-link class="mobile p-4 block" :to="mi.url">
          {{ mi.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Bars3Icon } from '@heroicons/vue/16/solid';
import { preloadImages } from '../../utils/helper';

const route = useRoute();

const menuItems = [
  { url: '/praesidium', name: 'Praesidium' },
  { url: '/clubs', name: 'Clubs' },
  { url: '/clublied', name: 'Clublied' },
  { url: '/sponsors', name: 'Sponsors' },
  { url: '/contact', name: 'Contact' },
];

const active = computed(() => menuItems.find((v) => v.url === route.path)?.url);
const isMobileMenuOpen = ref(false);

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
);

await preloadImages(['/assets/sk-logo.png'])
</script>

<style scoped>
.desktop.router-link-active {
  position: relative;
  text-shadow: 1px 0 0 currentColor;
}
.desktop.router-link-active::after {
  content: '';
  height: 2px;
  border-radius: 1rem;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgb(23, 37, 84);
}
.desktop.no-after.router-link-active::after {
  bottom: -0.5rem;
  width: 80%;
  left: 10%;
  right: 10%;
}

.mobile.router-link-active {
  position: relative;
  text-shadow: 1px 0 0 currentColor;
  @apply bg-slate-200;
}
.hamburger-icon {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
