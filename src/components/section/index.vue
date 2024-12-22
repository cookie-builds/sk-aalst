<template>
  <section :class="`flex justify-center py-16 ${titleAbove && 'pt-0 -mt-12 lg:-mt-24'} px-4 ${bgColor} ${textColor}`">
    <div :class="`flex flex-col ${alignItems} ${titleAbove ? 'gap-10 lg:gap-32' : 'gap-6'} ${!noMaxWidth && 'max-w-5xl'} w-full`">
      <h2 :class="`${bigTitle ? 'text-4xl lg:text-[6rem]' : 'text-4xl'} font-black w-fit ${titleAbove && 'text-white'}`">{{ title }}</h2>
      <div class="text-justify w-full relative">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  bgColor: string;
  textColor: string;
  title: string;
  bigTitle?: boolean;
  titleAbove?: boolean;
  noMaxWidth?: boolean;
  alignItems: 'items-start' | 'items-end';
}>()
</script>