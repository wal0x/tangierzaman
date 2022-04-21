<template>
  <div class="w-full flex flex-col p-3">
    <div
      v-if="photoData"
      class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col"
    >
      <div class="flex flex-row justify-center">
        <ImgComparisonSlider>
          <!-- eslint-disable -->
          <img
            slot="first"
            class="max-h-screen"
            :src="photoData?.imageURL" />
          <img
            class="gray max-h-screen"
            slot="second"
            :src="photoData?.imageURL" />
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="mb-4 text-2xl">
          {{ photoData.i18nData[currentLanguage].title }}
        </h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>
            {{ photoData?.i18nData[currentLanguage].description }}
          </p>
        </div>
        <a
          :href="photoData.photographerLink"
          class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase tracking-wide"
          style=""
        >
          {{ $t("PhotoBy") }} :
          <span
            :class="photoData.photographerLink ? 'underline' : 'no-underline'"
            >{{ photoData.i18nData[currentLanguage].photographer }}</span
          ></a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import { useGalleryStore } from "@/stores/gallery";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { vueI18n } from "@/i18n/i18n.helper";

const store = useGalleryStore();
const route = useRoute();

const photoData = store.getPhotoDataByID(route.params.id as string);

const currentLanguage = computed(() => vueI18n.global.locale);
</script>
<style></style>
