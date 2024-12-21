<template>
  <div class="flex w-full max-h-[50vh]">
    <img class="w-full object-cover object-top" src="/src/assets/banner.jpg"  />
  </div>
  <section-component bg-color="bg-yellow-50" text-color="text-blue-950" title="SK Aalst" align-items="items-start" big-title>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus volutpat tincidunt. Pellentesque consequat quis nibh a dictum. Phasellus aliquet scelerisque lacus, eget aliquet sem malesuada nec. Duis at orci id ipsum fringilla malesuada. Cras et porta dui, nec maximus orci. Donec lorem turpis, blandit et sem non, vestibulum accumsan erat. In vitae tempor ante, sit amet convallis sapien. Nunc scelerisque finibus mi, id egestas velit sollicitudin at. Nam bibendum justo ut aliquet finibus. Integer vehicula dui non fermentum facilisis. Quisque diam tellus, aliquet at dui sit amet, sollicitudin fermentum eros.
  </section-component>
  <section-component bg-color="bg-white" text-color="text-blue-950" title="Vertrouwenspersoon voor elke club" align-items="items-start">
    <p>
      Een vertrouwenspersoon biedt een luisterend oor en advies aan clubleden die te maken hebben met ongewenst gedrag, zoals pesten, intimidatie of discriminatie binnen clubverband. Ze helpen bij het verhelderen van de situatie en bieden ondersteuning bij het vinden van oplossingen. Daarnaast dragen ze bij aan het creeren van een veilige en respectvolle werkomgeving door bewustwording en preventie te bevorderen. Deze vertrouwenspersonen zijn onafhankelijk van de club om belangenvermenging te voorkomen. Hieronder een overzicht van de bevoegde vertrouwenspersonen per club.
    </p>
    <div class="flex flex-wrap gap-16 justify-between mt-20 max-w-3xl m-auto">
      <div class="w-fit flex flex-col gap-2 items-center" v-for="info of contactInfo">
        <img :src="`/src/assets/praesidium/${info.img}`" class="h-80 w-80 rounded-full object-cover" />
        <div class="flex flex-col justify-center w-fit text-center">
          <div class="font-bold text-2xl">{{ info.club }}</div>
          <div>{{ info.name }}</div>
          <div>Lid bij {{ info.memberOf }}</div>
          <div><a class="underline underline-offset-4" :href="`mailto:${info.mail}`">Mail</a></div>
        </div>
      </div>
    </div>
  </section-component>
  <section-component bg-color="bg-yellow-50" text-color="text-blue-950" title="Jaarlijkse evenementen" align-items="items-start" big-title>
    <p><b>SK-voetbal</b>: </p>
    <p><b>Cantorconvent</b>: </p>
    <p><b>Student Zingt</b>: </p>
  </section-component>
</template>
<script setup lang="ts">
import SectionComponent from '../components/section/index.vue';

const contactInfo = [
  { img: 'wout.jpg', club: 'A Gogo', name: 'Wout Dullaerts', memberOf: 'Caepa Vestigia', mail: 'wout.dullaerts@gmail.com' },
  { img: 'lynn.jpg', club: 'Caepa Vestigia', name: 'Lynn Capelleman', memberOf: 'Lorem Ipsum', mail: 'lynn.capelleman@hotmail.com' },
  { img: 'nick.jpg', club: 'Lorem Ipsum', name: 'Nick Van der Meersche', memberOf: 'Caepa Vestigia', mail: 'nickvandermeersche.nvbm@gmail.com' },
  { img: 'mitch.jpg', club: 'Mercurius', name: 'Mitchell Goossens', memberOf: 'Lorem Ipsum', mail: 'mitchell_47@live.com' },
]
</script>