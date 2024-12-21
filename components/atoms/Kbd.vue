<script setup lang="ts">

const props = defineProps({
  value: {
    type: String,
    default: "",
  }
})
</script>

<template>
  <div class="h-8 w-8 border-[1px] border-white flex justify-center items-center rounded">
      <span class="text-white text-xs p-2">{{ props.value }}</span>
  </div>
</template>

<style scoped lang="scss">

</style>