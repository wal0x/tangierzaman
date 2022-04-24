<template>
  <div class="w-full flex flex-col p-3">
    <div class="flex-1 flex flex-col w-96 my-0 mx-auto">
      <IconNotFound />
      <h3 class="mb-4 text-2xl text-center font-bold capitalize">
        {{ $t("pagenotfound") }}
      </h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconNotFound from "@/components/icons/IconNotFound.vue";
</script>
<style></style>
