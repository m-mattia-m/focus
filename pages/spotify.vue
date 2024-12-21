<template>
  <div class="w-full h-full flex justify-center items-center bg-cyan-400 relative overflow-hidden">
    <div ref="el" :style="style" class="h-24 w-auto fixed p-6 pb-0 bg-black/30 rounded-3xl flex flex-col justify-center absolute">
      <img
          src="https://i.scdn.co/image/ab67616d0000b273d59c9d1911c8ca2707a4849e"
            class="rounded-xl border-separate duration-300"
          :class="[isPlayingMusic ? 'brightness-120' : 'brightness-80']"
          alt="cover"
          draggable="false"
      />
      <div class="flex flex-col justify-center py-6">
        <div class="flex flex-col justify-center">
          <p class="text-center text-xl font-bold">Song</p>
          <p class="text-center text-lg font-light -mt-1">Artist</p>
        </div>
        <div class="flex justify-center items-center pt-1">
          <div class="flex justify-center items-center pt-1">
            <button
                class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5">
              <UIcon @click="remain" name="heroicons:backward-20-solid" />
            </button>
            <button  v-if="!isPlayingMusic" @click="play"
                class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5 my-0.5">
              <UIcon name="heroicons:play-20-solid" />
            </button>
            <button v-if="isPlayingMusic" @click="pause"
                class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5 my-0.5">
              <UIcon name="heroicons:pause-20-solid" />
            </button>
            <button
                class="transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30 p-1.5">
              <UIcon @click="skip" name="heroicons:forward-20-solid" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})

const isPlayingMusic = ref(false)

function play():void {
  isPlayingMusic.value = true
}

function pause():void {
  isPlayingMusic.value = false
}

function remain():void {}

function skip():void {}

</script>

