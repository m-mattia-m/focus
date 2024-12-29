<script setup lang="ts">

const router = useRouter()

onMounted(async () => {
  clearAuthToken()
  await router.push('/login')
})

</script>

<template></template>

<style scoped lang="scss">

</style>