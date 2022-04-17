<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import {
  DEFAULT_LANGUAGE,
  HTMLTagAdjustToLanguage,
  LANGUAGES,
  vueI18n,
} from "./i18n/i18n.helper";
let showMenu = ref(false);

const currentLanguage = computed(() => vueI18n.global.locale);
const availableLanguages = computed(() => Object.keys(LANGUAGES));

const toggleNav = () => (showMenu.value = !showMenu.value);
const changeLanguage = (language: LANGUAGES) => {
  vueI18n.global.locale = language; // change vue-i18n language
  HTMLTagAdjustToLanguage(language);
};

onMounted(() => {
  HTMLTagAdjustToLanguage(DEFAULT_LANGUAGE);
});
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
        >
          <p>{{ $t("AppName") }}</p>
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
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:mt-0 capitalize"
      >
        <li class="text-gray-100 hover:text-blue-400 md:mx-5">
          {{ $t("Home") }}
        </li>
        <li class="text-gray-100 hover:text-blue-400 md:mx-5">
          {{ $t("Album") }}
        </li>
        <li class="text-gray-100 hover:text-blue-400 md:mx-5">
          {{ $t("Credits") }}
        </li>
        <li class="text-gray-100 hover:text-blue-400 md:mx-5">
          {{ $t("ContactUs") }}
        </li>
        <li class="text-gray-100">
          <span
            v-for="lang in availableLanguages"
            :key="lang"
            class="underline uppercase hover:text-blue-400 mx-1"
            :class="{ 'text-red-400': currentLanguage === LANGUAGES[lang] }"
            @click="changeLanguage(LANGUAGES[lang])"
            >{{ LANGUAGES[lang] }}</span
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
