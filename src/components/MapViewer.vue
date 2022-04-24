<template>
  <iframe
    :src="gMapsLinkI18N"
    style="border: 0"
    allowfullscreen="true"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>
<script setup lang="ts">
import { vueI18n } from "@/i18n/i18n.helper";
import { computed } from "vue";

const props = defineProps<{
  gMapsLink: string;
}>();

const currentLanguage = computed(() => vueI18n.global.locale);
const gMapsLinkI18N = computed(() =>
  props.gMapsLink.replace(
    /!1s..!2s../g,
    `!1s${currentLanguage.value}!2s${currentLanguage.value}`
  )
);
</script>
<style></style>
