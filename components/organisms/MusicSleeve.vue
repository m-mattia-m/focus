<template>
  <div ref="el" :style="style"
       class="w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-3/12 sm:p-4 sm:pb-0 p-3 pb-0 rounded-3xl flex flex-col justify-center absolute"
       :class="{ 'bg-black/30' : props.showBackground}">
    <img
        :src="song.cover"
        class="rounded-xl border-separate duration-300 h-inherit "
        :class="[isPlayingMusic ? 'brightness-110' : 'brightness-75']"
        alt="cover"
        draggable="false"
    />
    <div class="flex flex-col justify-center py-2 sm:py-3 md:py-4 text-white">
      <div class="flex flex-col justify-center">
        <p class="text-center text-xl font-bold">{{ song.title }}</p>
        <p class="text-center text-lg font-light -mt-1">{{ song.artist }}</p>
      </div>
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center">
          <button
              class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5">
            <BackwardIcon class="h-6 w-6"/>
          </button>
          <button v-if="!isPlayingMusic" @click="play"
                  class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5 my-0.5">
            <PlayIcon class="h-6 w-6"/>
          </button>
          <button v-if="isPlayingMusic" @click="pause"
                  class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5 my-0.5">
            <PauseIcon class="h-6 w-6"/>
          </button>
          <button
              class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5">
            <ForwardIcon class="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDraggable} from '@vueuse/core'
import {ref} from 'vue'
import { PauseIcon, PlayIcon, BackwardIcon, ForwardIcon } from '@heroicons/vue/24/solid'

const el = ref<HTMLElement | null>(null)
const {x, y, style} = useDraggable(el, {
  initialValue: {x: 40, y: 40},
})
const props = defineProps({
  showBackground: {
    type: Boolean,
  }
})

const isPlayingMusic = ref(false)
const song: Song = {
  title: "Title",
  artist: "Artist",
  cover: "https://i.scdn.co/image/ab67616d0000b273d59c9d1911c8ca2707a4849e",
}

function play(): void {
  isPlayingMusic.value = true
}

function pause(): void {
  isPlayingMusic.value = false
}

function remain(): void {
}

function skip(): void {
}

interface Song {
  title: string,
  artist: string,
  cover: string,
}

</script>

