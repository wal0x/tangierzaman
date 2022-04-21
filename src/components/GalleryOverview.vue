<script setup lang="ts">
import { vueI18n } from "@/i18n/i18n.helper";
import { useGalleryStore } from "@/stores/gallery";
import { computed } from "vue";
import PhotoOverview from "./PhotoOverview.vue";

const store = useGalleryStore();

const currentLanguage = computed(() => vueI18n.global.locale);
</script>

<template>
  <h1 class="capitalize shadow-sm shadow-slate-400 p-4">
    {{ $t("LastAdded") }}
  </h1>
  <div class="flex flex-wrap">
    <PhotoOverview
      v-for="photo in store.gallery"
      :key="photo.id"
      :identifier="photo.id"
      :image-url="photo.imageURL"
      :title="photo.i18nData[currentLanguage].title"
      :briefing="photo.i18nData[currentLanguage].briefing"
      :photographer="photo.i18nData[currentLanguage].photographer"
      :link="photo.photographerLink"
    />
  </div>
</template>
