<script setup lang="ts">
import Background from "~/components/molecules/Background.vue";
import Input  from "~/components/atoms/Input.vue";
import {sleep} from "@antfu/utils";
import {isLoggedIn} from "~/utils/auth";
import FButton from "~/components/atoms/FButton.vue";

const router = useRouter()

const email = ref("")
const password = ref("")
const passwordVerify = ref("")
const errorMessage = ref("")

onMounted(async () => {
  addEventListener()

  if (await isLoggedIn()) {
    await router.push('/settings')
  }
})

function addEventListener(): void {
  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      registration()
    }
  })
}

async function registration(): Promise<void> {
  try {
    await $fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        email: email.value,
        password: password.value,
        passwordVerify: passwordVerify.value
      }
    })
    await sleep(2000)
    await router.push('/login')
  } catch (error: any){
    errorMessage.value = `Registration failed: ${error.statusMessage}`
  }
}
</script>

<template>
  <Background kind="gradient">
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-2/5 flex flex-col">
        <h1 class="text-2xl mb-4 text-white">Registration</h1>
        <p class="text-white my-1">
          Already have an account?
          <a class="italic underline" href="/login">Log in</a>
        </p>

        <Input title="E-Mail" name="email" type="text" :value="email" @value="(value: string) => email = value" />
        <Input title="Password" name="password" type="password" :value="password" @value="(value: string) => password = value" />
        <Input title="Password verify" name="password-verify" type="password" :value="passwordVerify" @value="(value: string) => passwordVerify = value" />

        <p class="text-red-600 mt-6">{{ errorMessage }}</p>

        <FButton value="Register" @click="registration" />
      </div>
    </div>
  </Background>
</template>

<style scoped lang="scss">

</style>