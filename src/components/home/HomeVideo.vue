<template>
  <video playsinline webkit-playsinline webkitplaysinline autoplay muted loop poster="@/assets/video/vid.png">
    <source src="@/assets/video/vid.webm" type="video/webm">
    <source src="@/assets/video/vid.mp4" type="video/mp4">
    <img src="@/assets/video/vid.png" alt="Background video">
  </video>
</template>
<style scoped>
  video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
