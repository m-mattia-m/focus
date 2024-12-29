<script setup lang="ts">

const props = defineProps<{ value: string }>()
const emits = defineEmits(['click'])

</script>

<template>
  <button @click="$emit('click')"
          class="w-24 bg-white/20 text-white mt-6 py-2 px-4 rounded ring-2 ring-white focus:ring-blue-600  focus:outline-none focus:border-none hover:bg-white hover:text-inherit">
    {{ props.value }}
  </button>
</template>

<style scoped lang="scss">

</style>