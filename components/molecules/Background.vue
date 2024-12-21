<template>
  <div
      class="w-full h-screen m-0 p-0 flex justify-center items-end flex-col object-cover"
      :class="{
          'bg-red-900': props.kind === 'city' || props.kind === 'landscape',
          'background-gradient': props.kind === 'gradient',
          'bg-white': props.kind === 'blank',
          'bg-green-900': props.kind === 'color',
       }"
  >
    <!--  v-show="props.kind == 'landscape' || props.kind == 'city'" -->
    <video v-if="props.kind == 'landscape' || props.kind == 'city'"
           @ended="playNextVideo()" ref="video" class="w-full h-full object-cover" autoplay muted>
          <source :src="videos[currentVideoIndex]" type="video/mp4"/>
<!--      <source src="/background/videos/landscape/1.mp4" type="video/mp4"/>-->
    </video>

    <slot class="w-full h-full"></slot>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';

const video = ref<HTMLVideoElement | null>(null);
const currentVideoIndex = ref(0);
const videos: Ref<string[]> = ref([])
const videosLandscape: string[] = [
  '/background/videos/landscape/1.mp4',
  '/background/videos/landscape/2.mp4',
  '/background/videos/landscape/3.mp4',
  '/background/videos/landscape/4.mp4',
  '/background/videos/landscape/5.mp4',
  '/background/videos/landscape/6.mp4',
  '/background/videos/landscape/7.mp4',
  '/background/videos/landscape/8.mp4',
  '/background/videos/landscape/9.mp4',
  '/background/videos/landscape/10.mp4',
  '/background/videos/landscape/11.mp4',
];
const videosCity: string[] = [
  '/background/videos/city/1.mp4',
];

const props = defineProps({
  kind: {
    type: String as PropType<"gradient" | "city" | "landscape" | "blank" | "color">,
    default: "gradient",
  }
})

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
  activateGradient()
  setVideoSettings()
});

watch(() => props.kind, () => {
  setVideoSettings()
});

function activateGradient(): void {
  if (props.kind !== "gradient") return
  rotator();
  darkChanger();
  percChanger();
}

function setVideoSettings(): void {
  // It would be better to set it <0 but the frame rate is to0 low for this.
  if (video.value) video.value.playbackRate = 1;

  if (props.kind === 'landscape') videos.value = videosLandscape
  if (props.kind === 'city') videos.value = videosCity
  if (video.value) video.value.load();
}

const playNextVideo = () => {
  if (currentVideoIndex.value < videos.value.length - 1) {
    currentVideoIndex.value++;
  } else {
    currentVideoIndex.value = 0
  }
  if (video.value) video.value.load();
};

</script>

<style scoped lang="scss">

:root {
  --dark: hsla(0, 75%, 70%, 1);
  --medium: hsla(30, 65%, 70%, 1);
  --light: hsla(50, 55%, 70%, 1);
  --angle: -45deg;
  --perc: 60%;
}

.background-gradient {
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
