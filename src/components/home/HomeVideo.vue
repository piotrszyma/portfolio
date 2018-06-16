<template>
  <video playsinline autoplay muted loop poster="mobile.png">
    <source src="@/assets/video/video.webm" type="video/webm">
    <source src="@/assets/video/video.mp4" type="video/mp4">
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
