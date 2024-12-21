<script setup lang="ts">
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/vue/24/solid";

const emits = defineEmits<{
  (e: 'background', value: string): void
}>()

const currentItem = ref(0)
const items = ref([
  'gradient',
  'landscape',
  'city',
  'blank',
  'color'
])

function increaseItemIndex(): void {
  if (items.value.length - 1 === currentItem.value) currentItem.value = 0
  else currentItem.value++;
  emits('background', items.value[currentItem.value] as string)
}

function decreaseItemIndex(): void {
  if (currentItem.value === 0) currentItem.value = items.value.length - 1
  else currentItem.value--;
  emits('background', items.value[currentItem.value] as string)
}

</script>

<template>
  <div class="flex flex-row w-full">
    <button @click="decreaseItemIndex">
      <ArrowLeftCircleIcon class="h-6 w-6 text-white justify-between"/>
    </button>
    <span class="flex w-full justify-center text-white capitalize">
      {{ items[currentItem] }}
    </span>
    <button @click="increaseItemIndex">
      <ArrowRightCircleIcon class="h-6 w-6 text-white"/>
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>