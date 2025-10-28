<script setup>
import { provide } from 'vue';
// import { GENERIC } from "./constants";
import moment from 'moment';
// import Test from './components/Test.vue';
import * as store from './store';


provide("store", store);


ue4('data', { "Type": "Web", "Status": "Launched" })
console.log("send Web Launched")

// ue4('ui_load', {});
// const getFormattedDatesa = () => {
//                 // Unix 时间戳（以秒为单位）
//             const timestamp = new Date("2024-08-24T02:29:43.670Z").getTime()+28800*1000;
//             // 将时间戳转换为毫秒
//             const newDate = new Date(timestamp );
//             // 获取 UTC 时间的字符串表示
//             const utcString = newDate.toUTCString();
//             console.log("moment.utc(utcString).format(GENERIC.default.DATE_FORMAT_ALERTS)==>",moment.utc(utcString).format(GENERIC.default.DATE_FORMAT_ALERTS))
//     return moment.utc(utcString).format(GENERIC.default.DATE_FORMAT_ALERTS)
// }
// getFormattedDatesa()

</script>

<template>
  <router-view></router-view>
</template>

<style>
body {
  /* background:#00000000; */
  /* zoom: 0.8; */
  /* transform-origin: left right; */
  /* transform: scale(0.45); */
  /* background-image: url(src/assets/tour/bgimg.png);
    background-size: cover; */
}

#app {
  /* overflow: hidden; */
}

#cctvBox,
#alarmsBox {
  /* zoom: 0.85; */
}

.videoActive video {
  width: 100% !important;
  height: 100% !important;
  object-fill: cover;
}

.fade-in {
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#dropdown-patrol {
  top: 0 !important;
  left: 14.875rem !important;
  /* transform: translate(0, 0)!important; */
}

#dropdown-filter0,
#dropdown-filter1,
#dropdown-filter2 {
  position: relative !important;
  transform: translate(0, 0) !important;
}

.video-analytics {
  background: url("@/assets/video-analytics.svg") center no-repeat;
  background-size: cover;
}

.video-analytics__tab {
  background: url("@/assets/video-analytics__tab.png") center no-repeat;
  background-size: cover;
}

.border-bg {
  background: url("@/assets/border-bg.png") center no-repeat;
  background-size: cover;
}

.border-bg {
  background: url("@/assets/border-bg.png") center no-repeat;
  background-size: cover;
}

.alert-notification-red {
  background: url("@/assets/alert-notification-red.png") center no-repeat;
  background-size: cover;
  /* 或者 contain */
  height: 8.125rem;
  /* 确保容器的高度足够显示背景 */
  width: 52.5625rem;
}

.alert-notification-orange {
  background: url("@/assets/alert-notification-orange.png") center no-repeat;
  background-size: cover;
  height: 8.125rem;
  /* 确保容器的高度足够显示背景 */
  width: 52.5625rem;
}

.alert-notification-blue {
  background: url("@/assets/alert-notification-blue.png") center no-repeat;
  background-size: cover;
  height: 8.125rem;
  /* 确保容器的高度足够显示背景 */
  width: 52.5625rem;
}

.step-finsh {
  background: url("@/assets/step-finsh-shadow.png") center no-repeat;
  background-size: cover;
}

.step-unfinsh {
  background: url("@/assets/step-unfinsh.png") center no-repeat;
  background-size: cover;
}

.step-line {
  background: url("@/assets/step-line.png") center no-repeat;
  background-size: cover;
}

.alert-team {
  background: url("@/assets/alert-team.svg") center no-repeat;
  background-size: cover;
}

.step-unline {
  background: url("@/assets/step-unline.png") center no-repeat;
  background-size: cover;
}

.title-line {
  background: url("@/assets/title-line.png") center no-repeat;
  background-size: cover;
}

.unchecked {
  background: url("@/assets/unchecked.png") center no-repeat;
  background-size: cover;
}

.checked {
  background: url("@/assets/checked.png") center no-repeat;
  background-size: cover;
}

.top-cover {
  background: url("@/assets/top-cover.png") center no-repeat;
  background-size: cover;
}

.bottom-mask {
  background: url("@/assets/bottom-mask.png") bottom no-repeat;
  background-size: 100% 34.25rem;
}

.bottom-mask-traffic {
  background: url("@/assets/bottom-mask.png") bottom no-repeat;
  background-size: 100% 40.25rem;
}

.left-mask {
  background: url("@/assets/left-mask.png") left no-repeat;
  background-size: 51.125rem 100%;
}
.right-mask {
  background: url("@/assets/right-mask.png") right no-repeat;
  background-size:51.125rem 100% ;
}

.top-mask {
  background: url("@/assets/top-mask.png") top no-repeat;
  background-size:100% 100%;
}

.br8 {
  border-radius: 1.5rem;
  border: 0.125rem solid rgba(255, 255, 255, 0.21);
}
</style>
