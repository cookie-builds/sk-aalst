<template>
  <div>
    <section-component title="Praesidium" bg-color="bg-white" text-color="text-blue-950" align-items="items-start">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="w-full flex flex-col mt-8 gap-4">
        <div v-for="(pr, i) of praesidium" :key="pr.name" class="flex flex-col md:flex-row bg-yellow-50 shadow-lg" :class="i%2 && 'md:flex-row-reverse'">
          <img :src="pr.img" class="max-h-80 md:max-h-60 md:max-w-60 h-full w-full object-cover" />
          <div class="flex flex-col flex-1 p-4 gap-2">
            <h2 class="font-bold text-lg">{{ pr.name }}</h2>
            <span><i>{{ pr.function }}</i></span>
            <p>{{ pr.description }}</p>
          </div>
        </div>
      </div>
    </section-component>
  </div>
</template>

<script lang="ts" setup>
import SectionComponent from '../components/section/index.vue';
import { praesidiumMembers } from '../data/praesidium';
import { preloadImages } from '../utils/helper';

const praesidium = praesidiumMembers.map(v => ({
  ...v,
  img: `/assets/${v.img}`
}));

await preloadImages(praesidium.map(v => v.img));
</script>