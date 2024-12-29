<script setup lang="ts">

import {AuthorizationCodeWithPKCEStrategy} from "@spotify/web-api-ts-sdk";

const config = useRuntimeConfig()
const route = useRoute()

onMounted(async () => {
  const code = route.query
  console.log(code)

  const client = new AuthorizationCodeWithPKCEStrategy(
      config.public.spotifyClientId,
      `${config.public.host}/spotify/callback`,
      ["user-read-private", "user-read-email"],
  )
  const temp = await client.getOrCreateAccessToken()
  console.log(temp.access_token)
})

</script>

<template>

</template>

<style scoped lang="scss">

</style>