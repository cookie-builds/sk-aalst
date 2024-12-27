<template>
  <div>
    <section-component title="Clubs" bg-color="bg-white" text-color="text-blue-950" align-items="items-start">
      <div class="flex flex-col gap-8 min-h-40">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="flex flex-col md:flex-row gap-4 bg-yellow-50 shadow-md p-4" v-for="club of clubs">
          <img :src="`/assets/${club.logo}`" class="max-h-60 h-full md:max-h-none md:h-auto md:w-60 object-contain" />
          <div class="flex flex-col align-top gap-2">
            <h2 class="font-extrabold text-xl">{{ club.name }}</h2>
            <p class="flex-1">{{ club.description }}</p>
            <div class="inline-flex ml-auto">
              <a v-if="club.facebook" :href="club.facebook" target="_blank" :class="`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ${club.website ? 'rounded-l' : 'rounded'}`">
                Naar Facebook
              </a>
              <a v-if="club.website" :href="club.website" target="_blank" :class="`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 ${club.facebook ? 'rounded-r' : 'rounded'}`">
                Naar Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section-component>
  </div>
</template>

<script lang="ts" setup>
import SectionComponent from '../components/section/index.vue';

const clubs = [
  {
    name: 'A Gogo',
    logo: 'a-gogo.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    facebook: 'https://www.facebook.com/AgogoAalst/?locale=nl_BE',
  },
  {
    name: 'Caepa Vestigia',
    logo: 'caepa.png',
    description: 'Caepa Vestigia is de studentenclub voor Aalsterse studenten die dagelijks pendelen tussen Aalst en Brussel/Gent om te studeren.',
    facebook: 'https://www.facebook.com/profile.php?id=100066391431214',
    website: 'https://caepavestigia.be/',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'lorem.jpeg',
    description: 'De studentenclub voor studenten Management, Verpleegkunde, Onderwijs en bij uitbreiding alle richtingen aan Odisee Hogeschool Aalst heet u welkom op hun website! Hier vinden jullie alles terug over SC Lorem Ipsum. Beginnend bij het huidig praesidium, de geschiedenis, onze oude garde en nog veel meer! Vragen? Stel ze gerust!',
    facebook: 'https://www.facebook.com/scloremipsum',
    website: 'https://www.scloremipsum.be/',
  },
  {
    name: 'Mercurius',
    logo: 'mercurius.png',
    description: 'Mercurius is dé studentenclub bij uitstek voor de studenten aan de HOGENT stadscampus Aalst. Bij ons voel je je meteen thuis door onze familiale, vriendschappelijke sfeer. Het doel van onze club is namelijk studenten uit allerlei verschillende richtingen samenbrengen in tal van studentikoze activiteiten en een hechte vriendengroep vormen.',
    facebook: 'https://www.facebook.com/groups/26262717221',
    website: 'https://www.mercurius-aalst.be',
  },
]
</script>

<style>

</style>