<template>
</template>

<script setup lang="ts">

import stringifyQuery from 'querystring'
import {AuthorizationCodeWithPKCEStrategy, SpotifyApi} from "@spotify/web-api-ts-sdk";

const config = useRuntimeConfig()

onMounted(async () => {

  const sdk = SpotifyApi.withUserAuthorization("3f42ccc89613464990e41bec14a2e242", "http://localhost:3000/spotify/callback", ["user-read-private", "user-read-email"]);
  await sdk.authenticate()

})
</script>

