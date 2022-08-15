<template lang="">
  <div @click="handleScreenFull" id="screenFull">
    <svg-icon :icon="icon ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>
<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeMount } from 'vue'

const icon = ref(screenfull.isFullscreen)
const handleScreenFull = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

const IconChange = () => {
  icon.value = screenfull.isFullscreen
}

onMounted(() => {
  screenfull.on('change', IconChange)
})

onBeforeMount(() => {
  screenfull.off('change')
})
</script>
<style lang=""></style>
