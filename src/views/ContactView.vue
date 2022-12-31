<script setup>
import image from '@/assets/images/norjamille.png'
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import Navigations from '../components/Navigations.vue';


</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 translate-y">
    <div class="mx-auto  max-w-5xl my-10 text-white">
      <Navigations />
      <div class="mt-5">
        <div class="p-5 rounded-2xl text-xl backdrop-blur bg-black/10">
          <section class="grid gap-5" aria-labelledby="contact-heading">
            <h2 id="contact-heading" class="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">Get in touch</h2>
            <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 class="text-lg font-medium text-warm-gray-900">Email</h3>
                <dl class="mt-2 text-base text-warm-gray-500">
                  <div>
                    <dt class="sr-only">Email</dt>
                    <dd>
                      norjamille.kasan@gmail.com
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

