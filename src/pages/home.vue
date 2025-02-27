<template>
  <div class="flex w-full max-h-[50vh]">
    <img class="w-full object-cover object-top" src="/assets/banner.jpg"  />
  </div>
  <section-component bg-color="bg-yellow-50" text-color="text-blue-950" title="SK Aalst" align-items="items-start" big-title title-above>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus volutpat tincidunt. Pellentesque consequat quis nibh a dictum. Phasellus aliquet scelerisque lacus, eget aliquet sem malesuada nec. Duis at orci id ipsum fringilla malesuada. Cras et porta dui, nec maximus orci. Donec lorem turpis, blandit et sem non, vestibulum accumsan erat. In vitae tempor ante, sit amet convallis sapien. Nunc scelerisque finibus mi, id egestas velit sollicitudin at. Nam bibendum justo ut aliquet finibus. Integer vehicula dui non fermentum facilisis. Quisque diam tellus, aliquet at dui sit amet, sollicitudin fermentum eros.
  </section-component>
  <section-component bg-color="bg-white" text-color="text-blue-950" title="Vertrouwens&shy;persoon voor elke club" align-items="items-start">
    <p>
      Een vertrouwenspersoon biedt een luisterend oor en advies aan clubleden die te maken hebben met ongewenst gedrag, zoals pesten, intimidatie of discriminatie binnen clubverband. Ze helpen bij het verhelderen van de situatie en bieden ondersteuning bij het vinden van oplossingen. Daarnaast dragen ze bij aan het creeren van een veilige en respectvolle werkomgeving door bewustwording en preventie te bevorderen. Deze vertrouwenspersonen zijn onafhankelijk van de club om belangenvermenging te voorkomen. Hieronder een overzicht van de bevoegde vertrouwenspersonen per club.
    </p>
    <div class="flex flex-wrap gap-10 justify-center md:justify-between mt-20 max-w-[42.5rem] m-auto relative">
      <div class="w-fit flex flex-col gap-2 items-center relative z-10 lg:text-white" v-for="info of contactInfo">
        <img :src="`/assets/${info.img}`" class="h-80 w-80 rounded-full object-cover" />
        <div class="flex flex-col justify-center w-fit text-center">
          <div class="font-extrabold text-2xl">{{ info.club }}</div>
          <div>{{ info.name }}</div>
          <div>Lid bij {{ info.memberOf }}</div>
          <div><a class="underline underline-offset-4" :href="`mailto:${info.mail}`">Mail</a></div>
        </div>
      </div>
      <div class="hidden lg:block absolute bg-blue-950 h-4/5 w-[150%] -left-[25%] -bottom-10 skew-y-6 rounded-md" />
    </div>
  </section-component>
  <section-component bg-color="bg-yellow-50" text-color="text-blue-950" title="Jaarlijkse evenementen" align-items="items-start">
    <h2>SK-voetbal</h2>
    <p></p>
    <h2>Cantorconvent</h2> 
    <p></p>
    <h2>Student Zingt</h2>
    <p></p>
  </section-component>
  <section-component bg-color="bg-blue-50" text-color="text-blue-950" title="Onze verantwoordelijkheid" align-items="items-end">
    <h2>Dopen controleren</h2>
    <p>
      Als Aalsterse club zijn jullie verplicht om de dopen volgens het huidige doopcharter te organisteren.
      Dit is terug te vinden op Vlaanderen.be onder Onderwijs en Vorming.
      Als SK zullen wij tijdens de dopen controleren of dit charter wordt nageleefd.
    </p>
    <h2>Communicatie</h2>
    <p>
      Wij willen de communicatie tussen de verschillende studentenclubs in Aalst verbeteren door regelmatig gezamenlijke vergaderingen te organiseren.
      Tijdens deze bijeenkomsten kunnen clubs ideeën uitwisselen, samenwerking bevorderen en gezamenlijke activiteiten plannen.
    </p>
    <h2>Ondersteuning</h2>
    <p>
      Als SK willen wij de clubs actief ondersteunen bij hun vragen en zorgen,
      zoals het vinden van geschikte zalen en het aanvragen van erkenning bij de stad Aalst.
      Daarnaast organiseren wij informatiemomenten over relevante onderwerpen die aansluiten bij de behoeften van de clubs.
      Op deze manier draagt het Seniorenkonvent bij aan het versterken en bevorderen van het clubleven.
    </p>
  </section-component>
  <section-component bg-color="bg-yellow-50" text-color="text-blue-950" title="Wat willen wij nog doen?" align-items="items-start">
    <h2>SK inhuren</h2>
    <p>
      Om zowel de werking van jullie club als die van het SK te bevorderen,
      kan je leden van het SK inhuren voor een avond een cantusfunctie te komen invullen voor €20, 
      hierbij heeft elke club twee jokers doorheen het jaar om een cantusfunctie gratis te laten invullen door een lid van het SK.
      Verder kan je ons voor een schappelijk prijsje van €35 voor een hele avond inhuren op activiteiten zoals TD's en fuiven.
      Het is natuurlijk niet de bedoeling ons in te huren om de rotte werkjes te geven die niemand anders wilt doen.
    </p>
    <h2>Verbroedering</h2> 
    <p>
      Als Seniorenkonvent streven wij ernaar de verbroedering tussen de
      verschillende studentenclubs in Aalst te bevorderen, dit door gezamenlijke
      activiteiten te plannen. Door evenementen zoals sporttoernooien, culturele
      uitstapjes en sociale bijeenkomsten te organiseren, willen wij de banden tussen
      de clubs versterken. Deze activiteiten kunnen bestaan uit uitstapjes onder de
      senioren of evenementen waar iedereen welkom is. Een eerste voorbeeld
      hiervan is de SK BBQ op 26/07.
    </p>
  </section-component>
</template>

<script setup lang="ts">
import SectionComponent from '../components/section/index.vue';
import { preloadImages } from '../utils/helper';

const contactInfo = [
  { img: 'wout.jpg', club: 'A Gogo', name: 'Wout Dullaerts', memberOf: 'Caepa Vestigia', mail: 'wout.dullaerts@gmail.com' },
  { img: 'brent.jpg', club: 'Caepa Vestigia', name: 'Brent Van Huylenbroeck', memberOf: 'Lorem Ipsum', mail: 'brent.vanhuylenbroeck@hotmail.com' },
  { img: 'nick.jpg', club: 'Lorem Ipsum', name: 'Nick Van der Meersche', memberOf: 'Caepa Vestigia', mail: 'nickvandermeersche.nvbm@gmail.com' },
  { img: 'mitch.jpg', club: 'Mercurius', name: 'Mitchell Goossens', memberOf: 'Lorem Ipsum', mail: 'mitchell_47@live.com' },
]

await preloadImages([
  '/assets/banner.jpg',
  ...contactInfo.map(v => `/assets/${v.img}`)
])

</script>
<style scoped>
h2 {
  @apply font-bold text-xl
}
h2:not(:first-child) {
  @apply mt-4
}
</style>