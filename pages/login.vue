<script setup lang="ts">
import Background from "~/components/molecules/Background.vue";
import type {LoginResponseBody} from "~/shared/types/auth";
import {sleep} from "@antfu/utils";
import Input from "~/components/atoms/Input.vue";
import {isLoggedIn, setAuthToken} from "~/utils/auth";
import FButton from "~/components/atoms/FButton.vue";

const router = useRouter()

const errorMessage = ref("")
const email = ref("")
const password = ref("")

onMounted(async () => {
  addEventListener()

  if (await isLoggedIn()) {
    await router.push('/settings')
  }
})

async function login() {
  try {
    const resp = await $fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email: email.value,
        password: password.value
      }
    })
    const body = resp.body as LoginResponseBody

    setAuthToken(body?.jwt || '')
    await sleep(1000)
    await router.push('/settings')
  } catch (error: any) {
    errorMessage.value = `Registration failed: ${error.statusMessage}`
  }
}

function addEventListener(): void {
  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      login()
    }
  })
}

</script>

<template>
  <Background kind="gradient">
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-2/5 flex flex-col">
        <h1 class="text-2xl mb-4 text-white">Log in</h1>
        <p class="text-white my-1">
          Do not have an account?
          <a class="italic underline" href="/registration">Register</a>
        </p>
        <Input title="E-Mail" name="email" type="text" :value="email" @value="(value) => email = value"/>
        <Input title="Password" name="password" type="password" :value="password"
               @value="(value) => password = value"/>

        <p class="text-red-600 mt-6">{{ errorMessage }}</p>

        <FButton value="Log in" @click="login"/>
      </div>
    </div>
  </Background>
</template>

<style scoped lang="scss">

</style>