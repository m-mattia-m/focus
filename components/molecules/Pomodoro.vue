<template>
  <div
      ref="el"
      :style="style"
      class="fixed p-3 rounded-3xl flex flex-col justify-center text-4xl text-white text-center"
      :class="{ 'bg-black/30': props.showBackground }"
  >
    <p>{{ formattedTime }}</p>
    <div class="flex flex-row items-center justify-center mt-2">
      <button
          v-if="!isPaused"
          @click="togglePause"
          class="w-8 h-8 p-1 transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30"
      >
        <PauseIcon class="h-6 w-6"/>
      </button>
      <button
          v-if="isPaused"
          @click="togglePause"
          class="w-8 h-8 p-1 transition duration-150 ease-in-out flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white/30"
      >
<!--        <UIcon name="heroicons:play-20-solid" />-->
        <PlayIcon class="h-6 w-6"/>
      </button>
      <p class="text-xl ml-2">{{ sessionType }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useDraggable } from '@vueuse/core';
import { PauseIcon, PlayIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  workDuration: {
    type: Number,
    default: 25,
  },
  breakDuration: {
    type: Number,
    default: 5,
  },
  showSeconds: {
    type: Boolean,
    default: true,
  },
  showBackground: {
    type: Boolean,
  },
});

const el = ref<HTMLElement | null>(null);
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});

const currentTime = ref(props.workDuration * 60);
const sessionType = ref('Work');
let timerId: number | null = null;
const isPaused = ref(false);

const formattedTime = computed(() => {
  const minutes = Math.floor(currentTime.value / 60).toString().padStart(2, '0');
  const seconds = (currentTime.value % 60).toString().padStart(2, '0');
  return props.showSeconds ? `${minutes}:${seconds}` : `${minutes}`;
});

const switchSession = () => {
  if (sessionType.value === 'Work') {
    sessionType.value = 'Break';
    currentTime.value = props.breakDuration * 60;
  } else {
    sessionType.value = 'Work';
    currentTime.value = props.workDuration * 60;
  }
};

const updateTime = () => {
  if (isPaused.value) return;

  if (currentTime.value > 0) {
    currentTime.value -= 1;
    const delay = props.showSeconds
        ? 1000 - new Date().getMilliseconds()
        : 60000 - (new Date().getSeconds() * 1000 + new Date().getMilliseconds());
    timerId = window.setTimeout(updateTime, delay);
  } else {
    switchSession();
    updateTime(); // Start the next session immediately.
  }
};

const togglePause = () => {
  isPaused.value = !isPaused.value;
  if (!isPaused.value) {
    updateTime(); // Resume the timer.
  } else {
    clearTimeout(timerId!); // Pause the timer.
    timerId = null;
  }
};

onMounted(() => {
  updateTime();
});

onUnmounted(() => {
  if (timerId) clearTimeout(timerId);
});

watch(() => props.showSeconds, () => {
  if (timerId) clearTimeout(timerId);
  if (!isPaused.value) updateTime();
});

watch(
    [() => props.workDuration, () => props.breakDuration],
    ([newWorkDuration, newBreakDuration]) => {
      if (sessionType.value === 'Work') {
        currentTime.value = newWorkDuration * 60;
      } else {
        currentTime.value = newBreakDuration * 60;
      }
      if (timerId) clearTimeout(timerId);
      if (!isPaused.value) updateTime();
    }
);
</script>

<style scoped>
.fixed {
  user-select: none; /* Prevent text selection while dragging */
  width: 200px;      /* Set width for better UI */
  height: 120px;     /* Set height for better UI */
}
</style>
