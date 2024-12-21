<template>
  <div
      ref="el"
      :style="style"
      class="fixed p-3 rounded-3xl flex flex-col justify-center text-4xl text-center text-white w-44"
      :class="{ 'bg-black/30 ' : props.showBackground }"
  >
    <p>{{ formattedTime }}</p>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, watch} from 'vue';
import {useDraggable} from "@vueuse/core";

const props = defineProps({
  showSeconds: {
    type: Boolean,
  },
  showBackground: {
    type: Boolean,
  }
});
const el = ref<HTMLElement | null>(null);
const {x, y, style} = useDraggable(el, {
  initialValue: {x: 40, y: 40},
});
const currentTime = ref(new Date());
const formattedTime = computed(() => {
  const hours = currentTime.value.getHours().toString().padStart(2, '0');
  const minutes = currentTime.value.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.value.getSeconds().toString().padStart(2, '0');
  return props.showSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
});
let timerId: number;
const updateTime = () => {
  currentTime.value = new Date();

  const delay = props.showSeconds
      ? 1000 - new Date().getMilliseconds()
      : 60000 - (new Date().getSeconds() * 1000 + new Date().getMilliseconds());

  timerId = window.setTimeout(updateTime, delay);
};

onMounted(() => {
  updateTime();
});

onUnmounted(() => {
  clearTimeout(timerId);
});

watch(() => props.showSeconds, () => {
  clearTimeout(timerId);
  updateTime();
});
</script>

<style scoped>
</style>
