<script setup lang="ts">
import router from "@/router";

defineProps<{
  identifier: number;
  imageUrl: string;
  title: string;
  briefing: string;
  photographer: string;
  link?: string;
}>();

function openComparator(id: number) {
  router.push({ name: "photocomparator", params: { id } });
}
</script>
<template>
  <div
    class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
    @click="openComparator(identifier)"
  >
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col"
    >
      <div class="flex flex-row">
        <div
          class="bg-cover bg-center h-48 flex-1 gray"
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        ></div>
        <div
          class="bg-cover bg-center h-48 flex-1"
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        ></div>
      </div>
      <div class="p-4 flex-1 flex flex-col" style="">
        <h3 class="mb-4 text-2xl">{{ title }}</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>{{ briefing }}</p>
        </div>
        <a
          :href="link"
          class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase tracking-wide"
          style=""
        >
          {{ $t("PhotoBy") }} :
          <span :class="link ? 'underline' : 'no-underline'">{{
            photographer
          }}</span></a
        >
      </div>
    </div>
  </div>
</template>
<style>
.gray {
  filter: grayscale(100%);
}
</style>
