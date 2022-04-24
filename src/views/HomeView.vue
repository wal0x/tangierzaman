<script setup lang="ts">
import router from "@/router";
import CoverImage from "../components/CoverImage.vue";
import GalleryOverview from "../components/GalleryOverview.vue";
import IconArrow from "../components/icons/IconArrow.vue";

function openGallery() {
  router.push({ name: "galleryview" });
}
</script>

<template>
  <CoverImage />
  <GalleryOverview :max-to-show="2" />
  <div class="flex flex-row justify-center items-center m-5">
    <button
      type="button"
      @click="openGallery"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <span class="mx-4 capitalize font-bold">{{ $t("Album") }}</span>
      <IconArrow class="rtl:rotate-180" />
    </button>
  </div>
</template>
