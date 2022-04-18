<script setup lang="ts"></script>

<template>
  <div
    class="bg-cover bg-center bg-no-repeat p-16 customShadow"
    :style="{
      backgroundImage: `url(/src/assets/milad.jpg)`,
    }"
  >
    <p
      class="text-white text-5xl px-5 mx-5 pt-5 mt-5 text-center font-serif mix-blend-overlay"
    >
      {{ $t("AppName") }}
    </p>
    <p class="text-white text-xl pb-5 mb-5 text-center font-serif">
      {{ $t("AppDescription") }}
    </p>
    <!-- Photo by
    <a
      href="https://unsplash.com/@mastodonic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >Milad Alizadeh</a
    >
    on
    <a
      href="https://unsplash.com/s/photos/tanger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >Unsplash</a
    > -->
  </div>
</template>

<style scoped>
.customShadow {
  -webkit-box-shadow: inset 0px 0px 50px 39px #000000;
  box-shadow: inset 0px 0px 50px 39px #000000;
}
</style>
