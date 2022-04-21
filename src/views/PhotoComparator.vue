<template>
  <div class="photoComparator">
    <h1>Compare photo with the id : {{ $route.params.id }}</h1>
    <h1>Compare photo with the name : {{ photoData?.i18nData.en.title }}</h1>
  </div>
</template>
<script setup lang="ts">
import { useGalleryStore } from "@/stores/gallery";
import { useRoute } from "vue-router";

const store = useGalleryStore();
const route = useRoute();

const photoData = store.getPhotoDataByID(route.params.id as string);
</script>
<style></style>
