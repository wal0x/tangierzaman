<template>
  <div class="w-full flex flex-col p-3">
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col"
    >
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="mb-4 text-2xl">
          {{ photoData.i18nData[currentLanguage].title }}
        </h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>
            {{ photoData.i18nData[currentLanguage].description }}
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <ImgComparisonSlider>
          <!-- eslint-disable -->
          <img
            slot="first"
            class="max-h-screen"
            :src="photoData.imageURL" />
          <img
            class="gray max-h-screen"
            slot="second"
            :src="photoData.imageURL" />
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
      <div class="p-4 flex-1 flex flex-col">
        <a
          :href="photoData.photographerLink"
          class="border-t border-b border-grey-light py-2 text-xs text-grey uppercase"
          style=""
        >
          {{ $t("PhotoBy") }} :
          <span
            :class="photoData.photographerLink ? 'underline' : 'no-underline'"
            >{{ photoData.i18nData[currentLanguage].photographer }}</span
          ></a
        >
      </div>

      <div class="flex justify-center">
        <MapViewer
          class="flex-1 h-96 max-w-5xl"
          :gMapsLink="photoData.gMapsIFrameLink"
        ></MapViewer>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import { useGalleryStore } from "@/stores/gallery";
import { computed } from "vue";
import { vueI18n } from "@/i18n/i18n.helper";
import MapViewer from "../components/MapViewer.vue";

const props = defineProps<{
  id: string;
}>();

const store = useGalleryStore();
const photoData = store.getPhotoDataByID(props.id);
const currentLanguage = computed(() => vueI18n.global.locale);
</script>
<style></style>
