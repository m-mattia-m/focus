<script setup lang="ts">

import {EyeIcon, EyeSlashIcon} from "@heroicons/vue/24/outline";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String as PropType<"email" | "text" | "password">,
    default: "text",
  },
  value: {
    type: String,
    default: 0,
  }
})
const emits = defineEmits<{
  (e: 'value', value: string): void
}>()

const value = ref(props.value)
const passwordHidden = ref(true);

</script>

<template>
  <div class="flex flex-col">
    <label :for="props.name" class="text-white mb-1 mt-5">{{ props.title }}</label>
    <input v-if="props.type !== 'password'" :id="props.name" :type="props.type" v-model="value" @input="emits('value', value)"
           class="py-2 px-3 ring-2 ring-white focus:ring-blue-600 focus:outline-none focus:border-none rounded bg-white/20 text-white"/>

    <div v-if="props.type === 'password' && passwordHidden" class="relative w-full h-10">
      <input
          v-if="props.type === 'password' && passwordHidden"
          id="password"
          type="password"
          v-model="value"
          class="relative w-full h-10 py-2 px-3 ring-2 ring-white focus:ring-blue-600 focus:outline-none focus:border-none rounded bg-white/20 text-white"
      />
      <button
          @click="passwordHidden = false" tabindex="-1"
          class="absolute top-1/2 right-3 -translate-y-1/2 flex justify-center items-center before:content-[''] before:absolute before:w-8 before:h-8"
      >
        <EyeIcon aria-hidden="true" class="w-auto h-7 text-white"/>
      </button>
    </div>
    <div v-if="props.type === 'password' && !passwordHidden" class="relative w-full h-10">
      <input
          id="password"
          type="text"
          v-model="value"
          class="w-full h-full py-2 px-3 ring-2 ring-white focus:ring-blue-600 focus:outline-none focus:border-none rounded bg-white/20 text-white"
      />
      <button
          @click="passwordHidden = true" tabindex="-1"
          class="absolute top-1/2 right-3 -translate-y-1/2 flex justify-center items-center before:content-[''] before:absolute before:w-8 before:h-8"
      >
        <EyeSlashIcon aria-hidden="true" class="w-auto h-7 text-white"/>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>