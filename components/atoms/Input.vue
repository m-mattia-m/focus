<script setup lang="ts">

import {PlusIcon, MinusIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  value: {
    type: Number,
    default: 0,
  }
})

const value = ref(props.value)

const emits = defineEmits<{
  (e: 'value', value: number): void
}>()

function toCamelCase(input: string): string {
  return input
      .toLowerCase()
      .split(' ')
      .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
}

</script>

<template>
  <div>
    <label :for="toCamelCase(props.name)" class="text-white mb-1">{{ props.name }}</label>
    <div class="flex flex-row">
      <button @click="value -= 1; $emit('value', value)"
          class="rounded border-1 border-white flex justify-center items-center w-8 h-8 mr-1 text-white hover:bg-white/20 active:bg-white/40">
<!--        <UIcon name="heroicons:minus-20-solid" class="flex justify-center items-center"/>-->
        <MinusIcon class="h-6 w-6 flex justify-center items-center"/>
      </button>
      <input :name="toCamelCase(props.name)"
             @change="$emit('value', value)"
             class="rounded bg-transparent border-1 border-white px-2 py-0.5 text-white w-26 text-center focus:border-1 focus:outline-1 focus:outline-none focus:ring-none"
             type="number"
             v-model="value"
      />
      <button @click="value += 1; $emit('value', value)"
              class="rounded border-1 border-white flex justify-center items-center w-8 h-8 ml-1 text-white hover:bg-white/20 active:bg-white/40">
<!--        <UIcon name="heroicons:plus-20-solid" class="flex justify-center items-center"/>-->
        <PlusIcon class="h-6 w-6 flex justify-center items-center"/>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
//@layer base {
//  input[type="number"]::-webkit-inner-spin-button,
//  input[type="number"]::-webkit-outer-spin-button {
//    -webkit-appearance: none;
//    margin: 0;
//  }
//}
</style>