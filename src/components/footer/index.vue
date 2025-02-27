<template>
  <footer class="flex flex-col justify-center items-center gap-10 p-4 pt-16 bg-blue-950 text-white shadow-lg">
    <div class="flex flex-row justify-between items-start max-w-5xl w-full gap-16">
      <router-link to="/">
        <img src="/assets/sk-logo.png" class="h-32 w-32" />
      </router-link>
      <div class="flex flex-col gap-4">
        <h3 class="font-extrabold text-xl">Links</h3>
        <ul class="flex flex-col gap-2">
          <li>Mail:&emsp;<a href="mailto:skaalst.student@outlook.com" target="_blank" class="font-semibold text-yellow-500">skaalst.student@outlook.com</a></li>
          <li>Instagram:&emsp;<a href="https://www.instagram.com/skaalst/" target="_blank" class="font-semibold text-yellow-500">@skaalst</a></li>
          <li>Facebook:&emsp;<a href="https://www.facebook.com/SKAalst" target="_blank" class="font-semibold text-yellow-500">SK Aalst</a></li>
        </ul>
      </div>
    </div>
    <div>
      © 2024 - Website gemaakt door Jonathan Couck
    </div>
  </footer>
</template>