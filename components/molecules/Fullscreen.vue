<script setup lang="ts">
import {useFullscreen} from "@vueuse/core";
import {ArrowsPointingInIcon, ArrowsPointingOutIcon} from '@heroicons/vue/24/solid'
import {watch} from "vue";

const {isFullscreen, toggle, enter, exit} = useFullscreen()

const props = defineProps({
  showIcon: {
    type: Boolean,
    default: true,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  }
})

watch(() => props.fullscreen, () => {
  if (props.fullscreen) enter()
  if (!props.fullscreen) exit()
});

</script>

<template>
  <button v-show="props.showIcon" @click="toggle()"
          class="absolute bottom-1 left-1 w-10 h-10 flex justify-center items-center rounded hover:bg-white/20 hover:text-secondary text-2xl text-white border-white border-0">
    <ArrowsPointingInIcon v-if="isFullscreen" class="h-6 w-6 text-white"/>
    <ArrowsPointingOutIcon v-if="!isFullscreen" class="h-6 w-6 text-white"/>
  </button>
</template>

<style scoped lang="scss">

</style>