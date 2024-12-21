<script setup lang="ts">
import {useFullscreen} from "@vueuse/core";

const {isFullscreen, toggle} = useFullscreen()

</script>

<template>
  <button @click="toggle()" class="absolute bottom-1 left-1 w-10 h-10 flex justify-center items-center rounded hover:bg-white/20 hover:text-secondary text-2xl text-white border-white border-0">
    <UIcon v-if="isFullscreen" class="text-white" name="heroicons:arrows-pointing-in"/>
    <UIcon v-if="!isFullscreen" class="text-white" name="heroicons:arrows-pointing-out"/>
  </button>
</template>

<style scoped lang="scss">

</style>