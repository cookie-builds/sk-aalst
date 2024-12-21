<template>
  <section :class="`flex justify-center py-16 px-4 ${bgColor} ${textColor}`">
    <div :class="`flex flex-col ${alignItems} gap-6 max-w-5xl w-full`">
      <h2 class="text-4xl font-extrabold w-fit">{{ title }}</h2>
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
  alignItems: 'items-start' | 'items-end';
}>()
</script>