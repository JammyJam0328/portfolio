<script setup>
import image from '@/assets/images/norjamille.png'
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import Navigations from '../components/Navigations.vue';


</script>

<template>
  <div class="mx-auto max-w-7xl  sm:px-6 lg:px-8 translate-y">
    <div class="mx-auto max-w-6xl  sm:max-w-5xl my-10 text-white">
      <Navigations />
      <div class="mt-5">
        <div>
          <div class="p-5 rounded-2xl text-xl backdrop-blur bg-black/10">
            <div class="flex items-center">
              <h1 class="text-3xl text- font-bold uppercase">
                ABOUT ME
              </h1>   
             
            </div>
            <p class="text-2xl mt-10 font-semibold text-cyan-300">I am a full stack developer
              specializing in developing web application with PHP and JavaScript.</p>
            <p class="mt-5">
              I have almost 1 year of experience in Software Development. In my career, I have had the opportunity to
              work on a variety of projects and have developed a diverse skill set.
              My portfolio showcases some of my best work and gives you a taste of what I am capable of. I am always
              striving to produce high-quality results and exceed my clients' expectations.
              Thank you for visiting my portfolio. I hope you enjoy exploring my work and getting to know more about me.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

