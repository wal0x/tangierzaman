<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div class="bg-black">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold font-serif text-gray-100 md:text-2xl hover:text-blue-400"
          >Tangier Zaman
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-blue-400 active:text-blue-400 focus:outline-0 focus:bg-transparent focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-gray-100 hover:text-blue-400">Home</li>
        <li class="text-gray-100 hover:text-blue-400">Album</li>
        <li class="text-gray-100 hover:text-blue-400">Credits</li>
        <li class="text-gray-100 hover:text-blue-400">Contact Us</li>
      </ul>
    </nav>
  </div>
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
