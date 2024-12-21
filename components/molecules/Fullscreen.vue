<script setup lang="ts">
import {useFullscreen} from "@vueuse/core";
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/vue/24/solid'

const {isFullscreen, toggle} = useFullscreen()

</script>

<template>
  <button @click="toggle()" class="absolute bottom-1 left-1 w-10 h-10 flex justify-center items-center rounded hover:bg-white/20 hover:text-secondary text-2xl text-white border-white border-0">
<!--    <UIcon v-if="isFullscreen" class="text-white" name="heroicons:arrows-pointing-in"/>-->
    <ArrowsPointingInIcon v-if="isFullscreen" class="h-6 w-6 text-white"/>
<!--    <UIcon v-if="!isFullscreen" class="text-white" name="heroicons:arrows-pointing-out"/>-->
    <ArrowsPointingOutIcon v-if="!isFullscreen" class="h-6 w-6 text-white"/>
  </button>
</template>

<style scoped lang="scss">

</style>