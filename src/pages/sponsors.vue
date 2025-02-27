<template>
  <div>
    <section-component title="Sponsors" bg-color="bg-white" text-color="text-blue-950" align-items="items-start">
      <div class="flex flex-wrap justify-center items-center gap-8">
        <div v-for="s of sponsors" class="text-center">
          <div class="w-60 h-60 rounded-full overflow-hidden max-w-full flex flex-col gap-2">
            <img :src="`/assets/${s.img}`" class="w-full h-full object-contain">
          </div>
          <h2 class="text-xl font-bold">{{ s.name }}</h2>
          <div class="italic">{{ s.type }}</div>
          <div>{{ s.address }}</div>
        </div>
      </div>
    </section-component>
  </div>
</template>

<script lang="ts" setup>
import SectionComponent from '../components/section/index.vue';

const sponsors = [
  {
    img: 'looyerij.jpg',
    name: 'De Looyerij',
    type: 'Restaurant',
    address: 'Kapellekensbaan 10, 9320 Aalst',
  },
  {
    img: 'ponnet.jpg',
    name: 'Ponnet',
    type: 'Bakkerij',
    address: 'Molenstraat 26, 9300 Aalst',
  },
  {
    img: 'ravazjol.jpg',
    name: 'Ravazjol',
    type: 'Bakkerij',
    address: 'Rozemarijnstraat 9, 9300 Aalst',
  },
  {
    img: 'malfroidt.png',
    name: 'Malfroidt',
    type: 'Bakkerij',
    address: 'Oude Kaai 34, 9400 Ninove',
  },
  {
    img: 'verleysen.jpg',
    name: 'Verleysen',
    type: 'Bakkerij',
    address: 'Vrijheidsstraat 16, 9300 Aalst',
  },
]
</script>