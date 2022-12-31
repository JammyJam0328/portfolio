<script setup>
import { RouterLink, useRoute } from 'vue-router';
const navigations = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Tech',
    path: '/tech-stack',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];
const route = useRoute();

</script>

<template>
  <div id="animationtracker" class="flex space-x-2 text-sm sm:text-lg sm:space-x-10  w-full  justify-start">
    <RouterLink v-for="nav in navigations" :key="nav.name" :to="nav.path" :class="{
  'text-cyan-300 border-b-2 border-cyan-300': route.path === nav.path,
  'text-white ': route.path !== nav.path,
}
" class="group inline-flex items-center  bg-transparent px-4 py-1.5 font-semibold  transition ">
     <span> {{ nav.name  }}</span>  <span v-if="nav.name ==='Tech'" class="hidden sm:block ml-2">Stack</span>
      <svg :class="{
  'stroke-cyan-300': route.path === nav.path,
  'stroke-white': route.path !== nav.path,
}" class="mt-0.5 ml-2 -mr-1  stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <path :class="{
  'opacity-0 group-hover:opacity-100': route.path !== nav.path,
  'opacity-100 ': route.path === nav.path,
}" class=" transition" d="M0 5h7"></path>
        <path :class="{
  'group-hover:translate-x-[3px]': route.path !== nav.path,
  'translate-x-[3px]': route.path === nav.path,
}" class="transition " d="M1 1l4 4-4 4"></path>
      </svg>
    </RouterLink>
  </div>
</template>