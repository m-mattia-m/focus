<script setup lang="ts">
import Switch from "~/components/atoms/Switch.vue";
import Layout from "~/components/organisms/Layout.vue";
import Input from "~/components/atoms/Input.vue";
import Carousel from "~/components/atoms/Carousel.vue";
import {AdjustmentsHorizontalIcon} from '@heroicons/vue/24/solid'

const isSettingsDialogOpen = ref(false)
const isMetaKeyPressed = ref(false)
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
  }
})

const emits = defineEmits<{
  (e: 'showClock', value: boolean): void
  (e: 'showPomodoro', value: boolean): void
  (e: 'showMusicSleeve', value: boolean): void
  (e: 'showSeconds', value: boolean): void
  (e: 'showGadgetsBackground', value: boolean): void
  (e: 'showIcons', value: boolean): void
  (e: 'pomodoroWorkDuration', value: number): void
  (e: 'pomodoroBreakDuration', value: number): void
}>()

onMounted(() => {
  registerKeyboardEventListener();
})

function registerKeyboardEventListener(): void {
  document.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === 'escape') isSettingsDialogOpen.value = false;
    if (event.key.toLowerCase() === 'meta') isMetaKeyPressed.value = true;

    console.log("event listener")
    console.log(isMetaKeyPressed.value)
    console.log(event.key)
    console.log(event)

    if ((event.ctrlKey || event.metaKey || isMetaKeyPressed.value) && event.key === "x") {
      event.preventDefault();
      isSettingsDialogOpen.value = !isSettingsDialogOpen.value;
    }
    if ((event.ctrlKey || event.metaKey || isMetaKeyPressed.value) && event.key === "v") {
      event.preventDefault();
      emits('showIcons', true)
    }
  });
}

</script>

<template>
  <div>
    <div class="absolute bottom-1 right-1">
      <button
          @click="isSettingsDialogOpen = !isSettingsDialogOpen"
          class="w-10 h-10 flex justify-center items-center rounded hover:bg-white/20 hover:text-secondary text-2xl text-white border-white outline-none focus:outline-none active:outline-none"
      >
<!--        <UIcon name="heroicons:adjustments-horizontal-20-solid"/>-->
        <AdjustmentsHorizontalIcon class="h-6 w-6"/>
      </button>
    </div>
    <div v-show="isSettingsDialogOpen" class="absolute top-3 right-3 ease-in-out duration-300 bg-black/60 p-4 rounded">
      <button class="flex flex-row justify-between items-center cursor-pointer" @click="isSettingsDialogOpen = false">
        <UKbd class="font-bold" variant="subtle">ESC</UKbd>
        <span class="text-white ml-4">Close settings</span>
      </button>
      <button class="flex flex-row justify-between items-center mt-3 cursor-pointer"
              @click="isSettingsDialogOpen = true">
        <UKbd class="font-bold" variant="subtle">&#8984;</UKbd>
        <span class="text-white mx-1">+</span>
        <UKbd class="font-bold" variant="subtle">X</UKbd>
        <span class="text-white ml-4">Show settings</span>
      </button>
      <button class="flex flex-row justify-between items-center mt-3 cursor-pointer"
              @click="$emit('showIcons', true)">
<!--        <UKbd class="font-bold" variant="subtle">&#8984;</UKbd>-->
        <span class="text-white mx-1">+</span>
<!--        <UKbd class="font-bold" variant="subtle">V</UKbd>-->
        <span class="text-white ml-4">Show icons</span>
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
      <Switch
          @value="(value: boolean) => $emit('showIcons', value)"
          :value="props.showIcons"
          class="pt-3"
          title="Icons"
      />
      <hr class="text-white/30 my-4">
      <Layout/>
      <hr class="text-white/30 my-4">
      <Carousel/>
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