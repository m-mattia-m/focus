<template>
  <div
      class="w-full h-screen m-0 p-0 flex justify-center items-end background flex-col"
  ><!-- @dblclick="toggle" -->
    <slot class="w-full h-full"></slot>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';

const j = ref(50);
const k = ref(0);
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const percChanger = async () => {
  while (j.value === 50) {
    if (j.value === 50) {
      for (j.value = 50; j.value < 66; j.value++) {
        await sleep(100);
      }
    }
    if (j.value === 66) {
      for (j.value = 66; j.value > 50; j.value--) {
        await sleep(100);
      }
    }
  }
};
const rotator = async () => {
  for (k.value = 0; k.value <= 360; k.value++) {
    await sleep(200);
    if (k.value === 360) k.value = 0;
  }
};
const darkChanger = async () => {
  let i = 0;
  while (true) {
    const prop = `hsla(${i}, 75%, 70%, 1)`;
    let temp = i + 30;
    const prop2 = `hsla(${temp}, 65%, 70%, 1)`;
    temp = temp + 20;
    const prop3 = `hsla(${temp}, 55%, 70%, 1)`;
    const prop4 = `${k.value}deg`;
    const prop5 = `${j.value}%`;

    document.documentElement.style.setProperty('--dark', prop);
    document.documentElement.style.setProperty('--medium', prop2);
    document.documentElement.style.setProperty('--light', prop3);
    document.documentElement.style.setProperty('--angle', prop4);
    document.documentElement.style.setProperty('--perc', prop5);

    await sleep(100);
    i = (i + 1) % 361; // Wrap i back to 0 after 360
  }
};

onMounted(() => {
  rotator();
  darkChanger();
  percChanger();
});
</script>

<style scoped lang="scss">

:root {
  --dark: hsla(0, 75%, 70%, 1);
  --medium: hsla(30, 65%, 70%, 1);
  --light: hsla(50, 55%, 70%, 1);
  --angle: -45deg;
  --perc: 60%;
}

.background {
  background: linear-gradient(var(--angle), var(--dark) 0%, var(--medium) var(--perc), var(--light) 100%);
  animation: gradient 3000ms ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
