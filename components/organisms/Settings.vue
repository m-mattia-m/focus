<script setup lang="ts">
import Switch from "~/components/atoms/Switch.vue";
import Layout from "~/components/organisms/Layout.vue";
import Input from "~/components/atoms/Input.vue";
import Carousel from "~/components/atoms/Carousel.vue";
import {AdjustmentsHorizontalIcon} from '@heroicons/vue/24/solid'
import Kbd from "~/components/atoms/Kbd.vue";
// import { onMounted } from 'vue'

const isSettingsDialogOpen = ref(false)
const props = defineProps({
  showClock: {
    type: Boolean,
  },
  showPomodoro: {
    type: Boolean,
  },
  showMusicSleeve: {
    type: Boolean,
  },
  showSeconds: {
    type: Boolean,
  },
  showGadgetsBackground: {
    type: Boolean,
  },
  showIcons: {
    type: Boolean,
  },
  pomodoroWorkDuration: {
    type: Number,
  },
  pomodoroBreakDuration: {
    type: Number,
  },
  showIcon: {
    type: Boolean,
    default: true,
  }
})

const showIcons = ref(true)
const fullscreen = ref(false)

const emits = defineEmits<{
  (e: 'showClock', value: boolean): void
  (e: 'showPomodoro', value: boolean): void
  (e: 'showMusicSleeve', value: boolean): void
  (e: 'showSeconds', value: boolean): void
  (e: 'showGadgetsBackground', value: boolean): void
  (e: 'showIcons', value: boolean): void
  (e: 'pomodoroWorkDuration', value: number): void
  (e: 'pomodoroBreakDuration', value: number): void
  (e: 'background', value: "gradient" | "city" | "landscape" | "blank" | "color"): void
  (e: 'fullscreen', value: boolean): void
}>()

onMounted(() => {
  registerKeyboardEventListener();
})

function registerKeyboardEventListener(): void {
  document.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key === "Escape") isSettingsDialogOpen.value = false;
    if (event.key === "o") isSettingsDialogOpen.value = true;
    if (event.key === "i") toggleIcons();
    if (event.key === "f") toggleFullscreen();
  });
}

function toggleIcons(): void {
  showIcons.value = !showIcons.value
  emits('showIcons', showIcons.value)
}

function toggleFullscreen(): void {
  fullscreen.value = !fullscreen.value
  emits('fullscreen', fullscreen.value)
}

</script>

<template>
  <div>
    <div v-show="showIcon" class="absolute bottom-1 right-1">
      <button
          @click="isSettingsDialogOpen = !isSettingsDialogOpen"
          class="w-10 h-10 flex justify-center items-center rounded hover:bg-white/20 hover:text-secondary text-2xl text-white border-white outline-none focus:outline-none active:outline-none"
      >
        <AdjustmentsHorizontalIcon class="h-6 w-6"/>
      </button>
    </div>
    <div v-show="isSettingsDialogOpen" class="absolute top-3 right-3 ease-in-out duration-300 bg-black/60 p-4 rounded">
      <button class="flex flex-row justify-between items-center cursor-pointer" @click="isSettingsDialogOpen = false">
        <Kbd value="ESC"/>
        <span class="text-white ml-4">Close settings</span>
      </button>
      <button class="flex flex-row justify-between items-center mt-3 cursor-pointer"
              @click="isSettingsDialogOpen = true">
        <Kbd value="O"/>
        <span class="text-white ml-4">Show settings</span>
      </button>
      <button class="flex flex-row justify-between items-center mt-3 cursor-pointer"
              @click="toggleIcons()">
        <Kbd value="I"/>
        <span class="text-white ml-4">Toggle icons</span>
      </button>
      <button class="flex flex-row justify-between items-center mt-3 cursor-pointer"
              @click="toggleFullscreen()">
        <Kbd value="F"/>
        <span class="text-white ml-4">Toggle fullscreen</span>
      </button>
      <hr class="text-white/30 my-4">
      <Switch
          @value="(value: boolean) => $emit('showClock', value)"
          :value="props.showClock"
          title="Clock"
      />
      <Switch
          @value="(value: boolean) => $emit('showPomodoro', value)"
          :value="props.showPomodoro"
          class="pt-3"
          title="Pomodoro"
      />
      <Switch
          @value="(value: boolean) => $emit('showSeconds', value)"
          :value="props.showSeconds"
          class="pt-3"
          title="Seconds"
      />
      <Switch
          @value="(value: boolean) => $emit('showMusicSleeve', value)"
          :value="props.showMusicSleeve"
          class="pt-3"
          title="Spotify sleeve"
      />
      <Switch
          @value="(value: boolean) => $emit('showGadgetsBackground', value)"
          :value="props.showGadgetsBackground"
          class="pt-3"
          title="Background"
      />
      <hr class="text-white/30 my-4">
<!--      <Layout/>-->
      <hr class="text-white/30 my-4">
      <Carousel @background="(value: string) => $emit('background', value)" />
      <hr class="text-white/30 my-4">
      <Input
          :value="pomodoroWorkDuration"
          @value="(value) => $emit('pomodoroWorkDuration', value)"
          name="Work duration"
      />
      <Input
          class="mt-3"
          :value="pomodoroBreakDuration"
          @value="(value) => $emit('pomodoroBreakDuration', value)"
          name="Break duration"
      />
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>