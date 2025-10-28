<template>
  <div id="app">
    <div class="videoPage">
      <video
        :id="elmId"
        class="video-js vjs-default-skin vjs-big-play-centered"
        :controls="false"
        preload="none"
        webkit-playsinline="true"
        playsinline
        x5-video-player-type="h5"
        crossorigin="anonymous"
      >
        <source :src="videoUrl" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref,inject, onMounted ,computed,defineProps,toRefs} from 'vue';

// const { ScoketStore, AlertStore } = inject("store");
// const videoSrc = new URLSearchParams(location.search).get("url");
const props=defineProps({
  elmId:{
    type: String,
    required: true,
  },
  videoUrl:{
    type: String,
    required: true,
  },
})
const {elmId,videoUrl} = toRefs(props)

onMounted(() => {
  console.log("elmId",elmId.value)
  const videoElement = document.getElementById(elmId.value);

  window.v = videojs(videoElement, {
    loop: true,
    muted: true,
    autoPlay: true,
    plugins: {
      pannellum: {
        "yaw":80
      },
    },
  });

  setTimeout(() => {
      // 获取所有播放按钮的 HTMLCollection
    const playButtons = document.getElementsByClassName("vjs-big-play-button");

    // 使用 for 循环遍历所有按钮
    for (let i = 0; i < playButtons.length; i++) {
      // 获取每个播放按钮
      const playButton = playButtons[i];

      // 为每个播放按钮触发点击操作
      setTimeout(() => {
        playButton.click();
      }, 100 * i);  // 可以适当延迟，确保每个按钮点击时视频已经加载
    }
        
      }, 1000);
    });
</script>

<style scoped>
body {
  margin: 0;
}

img {
  max-width: 350vw !important;
}

.form,
.videoBox {
  width: 50vw;
  margin: 0 auto;
  margin-top: 2.4375rem;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.videoPageHidden {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  /* background-color: rgba(0, 0, 0, 0.7); */
  transition: 0.3s;
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
}

.videoPage {
  /* position: fixed;
  left: 0;
  top: 0;
  z-index: 999; */
  /* background-color: rgba(0, 0, 0, 0.7); */
  transition: 0.3s;
  width: 100%;
  height: 100%;
  opacity: 1;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hover {
  opacity: 1;
  cursor: pointer;
  transition: 0.3s;
}

.hover:hover {
  opacity: 0.4;
  transition: 0.3s;
}
.panorama-dimensions{
  width: 100% !important;
  height: 100% !important;
}
.video-js{
  width: 100% !important;
  height: 100% !important;
}
</style>
