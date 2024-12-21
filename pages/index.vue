<template>
  <div ref="screen" class="h-full w-full absolute">
    <Background :kind="background">
      <MusicSleeve
          v-if="showMusicSleeve"
          :show-background="showBackground"
      />
      <Clock
          v-if="showClock"
          :show-seconds="showSeconds"
          :show-background="showBackground"
      />
      <Pomodoro
          v-if="showPomodoro"
          :work-duration="pomodoroWorkDuration"
          :break-duration="pomodoroBreakDuration"
          :show-seconds="showSeconds"
          :show-background="showBackground"
      />
<!--      <p class="text-black">asdf</p>-->
      <Settings
          :show-icon="showIcons"
          @showIcons="(value) => showIcons = value"
          :show-clock="showClock"
          @show-clock="(value) => showClock = value"
          :show-pomodoro="showPomodoro"
          @show-pomodoro="(value) => showPomodoro = value"
          :show-music-sleeve="showMusicSleeve"
          @show-music-sleeve="(value) => showMusicSleeve = value"
          :show-gadgets-background="showBackground"
          @show-gadgets-background="(value) => showBackground = value"
          :show-seconds="showSeconds"
          @showSeconds="(value) => showSeconds = value"
          :pomodoro-work-duration="pomodoroWorkDuration"
          @pomodoro-work-duration="(value) => pomodoroWorkDuration = value"
          :pomodoro-break-duration="pomodoroBreakDuration"
          @pomodoro-break-duration="(value) => pomodoroBreakDuration = value"
          @background="(value) => background = value"
          @fullscreen="(value) => fullscreen = value"
      />
      <Fullscreen :fullscreen="fullscreen" :show-icon="showIcons"/>
    </Background>
  </div>
</template>

<style scoped lang="scss">
</style>

<script lang="ts" setup>
import Background from "~/components/molecules/Background.vue";
import MusicSleeve from "~/components/organisms/MusicSleeve.vue";
import Clock from "~/components/molecules/Clock.vue";
import Settings from "~/components/organisms/Settings.vue";
import Pomodoro from "~/components/molecules/Pomodoro.vue";
import Fullscreen from "~/components/molecules/Fullscreen.vue";

const fullscreen = ref(false)
const showClock = ref(false)
const showPomodoro = ref(false)
const showMusicSleeve = ref(false)
const showSeconds = ref(false)
const showBackground = ref(false)
const showIcons = ref(true)
const pomodoroWorkDuration = ref(30)
const pomodoroBreakDuration = ref(5)
const background: Ref<"gradient" | "city" | "landscape" | "blank" | "color"> = ref("gradient")

</script>