<template>
  <UApp>
    <NuxtPage/>
  </UApp>
</template>

<style scoped lang="scss">
</style>

<script lang="ts" setup>
import {useColorMode} from "@vueuse/core";

const colorMode = useColorMode()

onMounted(() => {
  colorMode.value = "light"
})
</script>