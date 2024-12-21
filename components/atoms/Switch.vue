<script setup lang="ts">
const prop = defineProps({
  title: {
    type: String
  },
  value: {
    type: Boolean,
  }
});
const isActive = ref(prop.value)

const emits = defineEmits<{
  (e: 'value', value: boolean): void
}>()

function updateValue(): void {
  isActive.value = !isActive.value
  emits("value", isActive.value)
}

</script>

<template>
  <div class="flex flex-row justify-between">
    <p class="text-white pr-6">{{ prop.title }}</p>
    <button
        @click="updateValue()"
        class="border-1 border-white rounded-full h-7 w-12 flex items-center"
        :class="[isActive ? 'justify-end' : 'justify-start']"
    >
      <span
          class="h-6 w-6 border-1 border-white bg-white text-white rounded-full flex justify-center items-center mx-[1px]"/>
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>