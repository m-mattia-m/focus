<script setup lang="ts">

import {getAuthClaims} from "~/utils/auth";
import Background from "~/components/molecules/Background.vue";
import Input from "~/components/atoms/Input.vue";
import FButton from "~/components/atoms/FButton.vue";
import {SpotifyApi} from "@spotify/web-api-ts-sdk";

const config = useRuntimeConfig()
const router = useRouter()
const authClaims: JwtClaims | undefined = getAuthClaims()

const email = ref(authClaims?.email)
const password = ref("")
const passwordVerify = ref("")

onMounted(async () => {
})

async function authenticateSpotify(): Promise<void> {
  const sdk = SpotifyApi.withUserAuthorization(
      config.public.spotifyClientId,
      `${config.public.host}/spotify/callback`,
      ["user-read-private", "user-read-email"],
  );
  await sdk.authenticate()
}

</script>

<template>

  <Background kind="gradient">

    <div class="w-full h-full p-8">

      <div class="w-full flex flex-col">

        <h1 class="mb-4 text-white text-4xl">Settings</h1>

        <h2 class="text-white text-2xl">Profile</h2>
        <div class="w-full flex flex-row items-end">
          <Input class="w-full" title="E-Mail" name="email" type="email" :value="email"
                 @value="value => email = value"/>
          <FButton value="Save" @click="console.log('Save')" class="h-10 w-24 max-w-24 min-w-24 ml-4"/>
        </div>
        <div class="w-full flex flex-row items-end">
          <Input class="w-full" title="Password" name="password" type="password" :value="password"
                 @value="value => password = value"/>
          <Input class="w-full ml-4" title="Password verify" name="password-verify" type="password"
                 :value="passwordVerify" @value="value => passwordVerify = value"/>
          <FButton value="Save" @click="console.log('Save')" class="h-10 w-24 max-w-24 min-w-24 ml-4"/>
        </div>

        <!-- TODO: Add 2FA verification setup -->

        <h2 class="mt-14 text-white text-2xl">Spotify</h2>
        <div class="w-full flex flex-row items-end">
          <FButton value="Sign in" @click="authenticateSpotify()" class="h-10"/>
        </div>

      </div>
    </div>
  </Background>

  <!--  <div class="bg-red-500 w-full h-full">-->

  <!--  </div>-->

</template>

<style scoped lang="scss">

</style>