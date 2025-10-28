<template>
  <!-- 放大视频弹窗 -->
  <div
    class="w-[100vw] h-[100vh] fixed left-0 top-0 right-0 bottom-0 bg-black/60 flex items-center justify-center z-[999]">
    <div class="w-[170.125rem] h-[104.5rem] pl-[2.5rem] pt-[2.5rem] relative overflow-hidden bg-black bg">
      <div class="flex items-center justify-between pr-[2.5rem] mb-[2.5rem]">
        <div class="text1 flex items-center font-['Roboto']">
          <div class="font-['Roboto']">
            {{ isShowCCTVamplifyText?.title }}
          </div>
          <div class="ml-[2.625rem] font-['Roboto']">
            {{ isShowCCTVamplifyText?.addressId }}
          </div>
        </div>
        <div class="cursor-pointer" @click="handlerSetCCTV(false, '')">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875rem" height="1.875rem" viewBox="0 0 30 30" fill="none">
            <path
              d="M29.4016 3.50213L26.501 0.601562L15.0016 12.101L3.50213 0.601562L0.601562 3.50213L12.101 15.0016L0.601562 26.501L3.50213 29.4016L15.0016 17.9021L26.501 29.4016L29.4016 26.501L17.9021 15.0016L29.4016 3.50213Z"
              fill="white" />
          </svg>
        </div>
      </div>

      <div class="w-[165.1875rem] h-[94.375rem]">
        <div class="w-full flex items-center justify-between px-[3.75rem] absolute top-[10.875rem] z-[999]">
          <div
            class="w-[25.875rem] h-[5.4375rem] pl-[2.2575rem] pr-[3.18rem] pt-[1.2406rem] pb-[1.1969rem] bg-black/60 rounded-[0.8125rem] justify-start items-center inline-flex overflow-hidden">
            <div id="clockDisplay"
              class="text-white text-[2rem] font-normal font-['Roboto'] leading-[150%] tracking-wide">
            </div>
          </div>
          <div
            class="w-[5.4375rem] h-[5.4375rem]">
          </div>
        </div>
        <div class="text2 absolute bottom-[5rem] left-[6.75rem] z-[999] flex items-center gap-[1.8125rem]">
          <svg xmlns="http://www.w3.org/2000/svg" class="mb-[1rem]" width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="10" fill="#FF5F49"/>
</svg>
<span>
  LIVE 3D
</span>
        </div>
        <div id="app" class="w-[165.1875rem] h-[94.375rem]">
          <div id="videoPage">
            <video id="panorama2" class="video-js vjs-default-skin vjs-big-play-centered" :controls="false"
              preload="none" webkit-playsinline="true" playsinline x5-video-player-type="h5" crossorigin="anonymous">
              <source id="ss" :src="isCCTVamplifyUrl" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, inject, onMounted, computed } from 'vue';
const { AlertStore } = inject("store");

const isCCTVamplifyUrl = computed({
  get() {
    return AlertStore.state.isCCTVamplifyUrl
  }
})
const isShowCCTVamplifyText = computed({
  get() {
    return AlertStore.state.isShowCCTVamplifyText
  }
})

const handlerSetCCTV = (status, url) => {
  AlertStore.methods.setCCTVVamplify(status, url,{})
}
// const { ScoketStore, AlertStore } = inject("store");
// const videoSrc = new URLSearchParams(location.search).get("url");
// 时钟
function formatTime(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月，确保是两位数
  const day = String(date.getDate()).padStart(2, '0'); // 获取日期，确保是两位数
  const year = date.getFullYear(); // 获取年份
  const hours = String(date.getHours()).padStart(2, '0'); // 获取小时，确保是两位数
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 获取分钟，确保是两位数
  const seconds = String(date.getSeconds()).padStart(2, '0'); // 获取秒数，确保是两位数

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

function startRealTimeClock(elementId) {
  setInterval(() => {
    const now = new Date(); // 获取当前时间
    const formattedTime = formatTime(now); // 格式化时间
    document.getElementById(elementId).textContent = formattedTime; // 更新页面上的内容
  }, 1000); // 每秒更新时间
}


onMounted(() => {
  const videoElement = document.getElementById("panorama2");
  window.v = videojs(videoElement, {
    loop: true,
    muted: true,
    autoPlay: true,
    plugins: {
      pannellum: {
        "yaw":280
      },
    },
  });

  // 调用函数并传入需要显示时间的元素ID
  startRealTimeClock('clockDisplay');

  setTimeout(() => {
    // 获取所有播放按钮的 HTMLCollection
    const playButtons = document.getElementsByClassName("vjs-big-play-button");

    // 获取每个播放按钮
    const playButton = playButtons[(playButtons.length - 1)];

    // 为每个播放按钮触发点击操作
    setTimeout(() => {
      playButton.click();
    }, 100);
  }, 1000);
});

</script>

<style scoped>
body {
  margin: 0;
}

.bg {
  border-radius: 1rem;
  border: 1px solid #283B44;
  background: rgba(0, 17, 26, 0.83);
}

img {
  max-width: 350vw !important;
}

.form,
.videoBox {
  width: 50vw;
  margin: 0 auto;
  margin-top: 39px;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text1 {
  color: #FFF;
  font-size: 2rem;
  font-weight: 400;
  line-height: 130%;
  /* 41.0.375rem*/
  letter-spacing: 0.25rem;
}
.text2{
  color:#FFF;
	font-family:Roboto;
	font-size:2.625rem;
	font-style:normal;
	font-weight:700;
	line-height:130%;
	/* 54.0.375rem*/
letter-spacing:1.1.625rem;
}

.videoPageHidden {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
}

#videoPage {
  /* position: fixed;
  left: 0;
  top: 0;
  z-index: 999; */
  /* background-color: rgba(0, 0, 0, 0.7); */
  transition: 0.3s;
  width: 100%;
  height: 94.375rem !important;

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

.panorama-dimensions {
  width: 100% !important;
  height: 94.375rem !important;

}
.pnlm-dragfix{
  height: 94.375rem !important;
}
.panorama2-dimensions{
  height: 94.375rem !important;
}
</style>
