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
            <p class="flex-1" v-for="desc in club.description">{{ desc }}</p>
            <div class="flex flex-col gap-2 sm:gap-0 sm:flex-row ml-auto sm:rounded overflow-hidden mt-4">
              <a v-if="club.facebook" :href="club.facebook" target="_blank" class="soc-link bg-blue-500 hover:bg-blue-600">
                Naar Facebook
              </a>
              <a v-if="club.facebook" :href="club.facebook" target="_blank" class="soc-link bg-[#e4405f] hover:bg-red-600">
                Naar Instagram
              </a>
              <a v-if="club.website" :href="club.website" target="_blank" class="soc-link bg-yellow-500 hover:bg-yellow-600">
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
import { preloadImages } from '../utils/helper';

const clubs = [
  {
    name: 'A Gogo',
    logo: 'a-gogo.png',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    facebook: 'https://www.facebook.com/AgogoAalst/?locale=nl_BE',
    instagram: 'https://www.instagram.com/agogostudentenclub/',
  },
  {
    name: 'Caepa Vestigia',
    logo: 'caepa.png',
    description: [
      'Caepa Vestigia is een studentenclub voor studenten die studeren in Aalst, Gent, Brussel of andere steden en in of rond Aalst wonen. We zijn een vereniging met als doel mede studenten te leren kennen en een uitlaatklep te bieden voor het stressvolle studentenleven. Wij organiseren cantussen, fuiven, uitstappen, maandelijkse clubavonden en verscheidene andere activiteiten. Buiten die activiteiten, moedigen wij onze leden ook aan om samen op pad te gaan. Of het nu gaat over samen studeren, spontaan iets te gaan drinken of eens een uitstap naar een andere stad te maken. Ons doel is om een vriendengroep te creëren waar iedereen welkom is en iedereen zich kan amuseren.',
      'Caepa Vestigia staat bekend als de feestvereniging van Aalst, maar buiten de zotte verhalen en onvergetelijke avonden zorgen wij ook voor onze leden. In moeilijke tijden bieden wij een luisterend oor of zoeken wij samen afleiding voor het zware studentenleven. Verder motiveren wij ook onze leden om samen te studeren. Doordat wij niet vasthangen aan een bepaalde richting of school, hebben wij leden uit verschillende studierichtingen. Dit kan ideaal zijn om op een andere manier uitleg te krijgen over een lastig vak of om een uitgebreid netwerk uit te bouwen met contacten die je in de toekomst kunnen helpen.',
    ],
    facebook: 'https://www.facebook.com/profile.php?id=100066391431214',
    website: 'https://caepavestigia.be/',
    instagram: 'https://www.instagram.com/caepavestigia/',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'lorem.png',
    description: [
      'Lorem Ipsum is de studentenclub voor studenten management, verpleegkunde, onderwijs en bij uitbreiding alle richtingen aan Odisee Hogeschool Aalst. Lorem Ipsum is een plek voor studenten om samen te komen, ervaringen te delen en nieuwe vriendschappen te sluiten. De club organiseert maandelijks cantussen, clubavonden en sport/cultuur activiteiten om de banden tussen haar leden actief te houden, wat bijdraagt aan een levendige studentenervaring. Daarnaast organiseert Lorem Ipsum ook jaarlijkse activiteiten zoals een quiz, fuif en weekend. Dit creëert ook onvergetelijke herinneringen tijdens hun studietijd.',
      'Studentenclub Lorem Ipsum speelt ook een rol als het gaat om het studeren en het behalen van een diploma. De club biedt een ondersteunende functie waar studenten elkaar kunnen motiveren en inspireren. Door samen te studeren, kunnen leden hun kennis delen en elkaar helpen bij moeilijke vakken, wat de kans op succes vergroot. Het behalen van een diploma is een belangrijke mijlpaal, en de steun van een studentenclub kan dit proces een stuk aangenamer maken. Door deel uit te maken Lorem Ipsum, kunnen studenten niet alleen hun academische doelen bereiken, maar ook waardevolle sociale contacten leggen die hen in de toekomst kunnen helpen, zowel professioneel als persoonlijk.'
    ],
    facebook: 'https://www.facebook.com/scloremipsum',
    website: 'https://www.scloremipsum.be/',
    instagram: 'https://www.instagram.com/scloremipsum/',
  },
  {
    name: 'Mercurius',
    logo: 'mercurius.png',
    description: [
      'Studentenclub Mercurius is DE studentenclub voor ALLE studenten die studeren aan HOGENT stadscampus Aalst en bij uitbreiding iedereen die zichzelf volwaardig student kan noemen. Wij zijn een uitlaatklep, een plaats waar iedereen gewoon zichzelf kan zijn en waar vriendschappen voor het leven ontstaan. Mercurius organiseert maandelijks clubavonden en cantussen. Daarnaast proberen wij ook wat sport en cultuur te implementeren in onze agenda\'s. Daarnaast hebben wij ook jaarlijks terugkomende activiteiten zoals onze langlopende LAN-Party die wij organiseren op HOGENT Aalst maar ook onze Halloween- en Krambamboulicantus, kroegentochten, nieuwjaarsreceptie etc... Kortom is er maandelijks wel iets te doen waardoor onze leden hechte vriendschappen sluiten en hierdoor herinneringen voor het leven opbouwen.',
      'Studentenclub Mercurius heeft als troef dat we voor alle richtingen aan HOGENT afgestudeerde leden hebben, waardoor wij steeds ondersteuning kunnen bieden aan leden die moeilijkheden ervaren tijdens hun traject. Ook op vlak van stageplaatsen en uiteindelijk jobs is er een doorstroom mogelijk via leden van onze club. Hierbij proberen wij ook tijdens alle examenperiodes in de bib of via Discord samen te studeren zodat wij hier ondersteuning kunnen bieden waar nodig. Het behalen van een diploma is voor al onze leden het uiteindelijke doel. Maar natuurlijk kan de boog niet altijd gespannen staan en proberen wij het plezier tijdens het academiejaar en tijdens de studententijd te behouden. Door dit alles worden er waardevolle contacten gelegd voor de toekomst die belangrijk zijn op zowel professioneel als persoonlijk vlak.',
    ],
    facebook: 'https://www.facebook.com/groups/26262717221',
    website: 'https://www.mercurius-aalst.be',
    instagram: 'https://www.instagram.com/mercurius.aalst/',
  },
]

await preloadImages(clubs.map(v => `/assets/${v.logo}`));
</script>

<style scoped>
.soc-link {
  @apply text-white font-bold py-2 px-4 rounded sm:rounded-none text-center;
}
</style>