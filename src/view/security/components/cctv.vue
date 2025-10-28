<template>
  <div>
    <div
      class="left-[2.1875rem] top-[15.375rem] absolute text-white text-[2rem] font-['semibold'] font-['Roboto'] tracking-wide">
      Alerted CCTV</div>
    <div class="h-[56rem] pt-[1rem] box-border relative left-0 top-[19.5rem] overflow-y-auto overflow-x-hidden scroll">
      <div
        class="breathing-border2 w-[40.9375rem] h-[30.75rem] relative left-[2.1875rem] top-0 pt-[1.5rem] pl-[1.125rem] rounded-md shadow-[0rem_1.25rem_0.75rem_0rem_rgba(0,0,0,0.15)] border-[0.0938rem] border-[#d03801] flex-col justify-start items-start inline-flex" style="background: radial-gradient(260.14% 141.21% at 52.54% 86.85%, rgba(52, 1, 1, 0.57) 0%, rgba(52, 1, 1, 0.00) 100%);">
        <div class="w-[38.375rem] h-[21.4375rem]">
          <VideoSmall class="w-full h-full" :elmId="'video11'" :videoUrl="videoMax.src"/>
        </div>
        <div
          class="p-[0.5625rem] left-[36.25rem] top-[19.6875rem] absolute bg-black/50 rounded-full flex items-center justify-center cursor-pointer" @click="handlerSetCCTV(true,test,videoMax)">
          <div class="w-6 h-6 relative ">
            <img class="w-full h-full block" src="@/assets/icon/maximise.svg" alt="">
          </div>
        </div>
        <div class="text-white/90 text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide mt-8 mb-3">
          {{ videoMax.title }}
        </div>
        <div class="text-white/90 text-2xl font-normal font-['Roboto'] leading-[1.95rem] tracking-wide">{{ videoMax.addressId }}
        </div>
      </div>
      <div class="w-[40.875rem] h-[0.125rem] relative left-[2.1875rem] top-[2.125rem]">
        <svg xmlns="http://www.w3.org/2000/svg" width="40.875rem" height="0.125rem" viewBox="0 0 654 2" fill="none">
          <path d="M0 1H400.839H412.653H654" stroke="url(#paint0_linear_8014_122179)" stroke-width="2" />
          <defs>
            <linearGradient id="paint0_linear_8014_122179" x1="1.09921" y1="1.49528" x2="621.677" y2="178.616"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.06" />
              <stop offset="0.46303" stop-color="white" stop-opacity="0.72" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        class="w-[40.9375rem] h-[18.25rem] left-[1.875rem] top-[4rem] relative inline-flex items-start justify-between flex-wrap">
        <div
          class="w-[19.5625rem] h-[18.25rem] p-[1.125rem] px-[0.875rem]  
         bg-[#00111a]/25 rounded-md border border-white/10 flex-col justify-start items-start inline-flex mb-[1.8125rem] relative"
          v-for="(item, index) in videoList" :key="index">
          <div class="w-[17.5625rem] h-[9.8125rem] rounded-md">
            <VideoSmall class="w-full h-full" :elmId="'video'+index" :videoUrl="item.src"/>
          </div>
          <div
            class="p-[0.5625rem] left-[15.5719rem] top-[8.1719rem] absolute bg-black/50 rounded-full justify-start items-start inline-flex cursor-pointer" @click="handlerSetCCTV(true,item.src,item)">
            <div class="w-6 h-6 relative">
              <img class="w-full h-full block" src="@/assets/icon/maximise.svg" alt="">
            </div>
          </div>
          <div class="text-white/90 text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide mt-[1.375rem] mb-2">{{ item.title }}
          </div>
          <div class="text-white/90 text-2xl font-normal font-['Roboto'] leading-[1.95rem] tracking-wide">{{ item.addressId }}
          </div>
        </div>
        <div class="w-full h-[3.125rem]"></div>
      </div>
    </div>
    <div class="w-full absolute bottom-0 z-[10] bg-black/0 ">
      <Page class="w-[40.4375rem]  justify-start items-center inline-flex overflow-hidden" :totalPages="10" />
      <div class="w-full h-[1.875rem]"></div>
    </div>
  </div>
</template>
<script setup>
import VideoSmall from "@/components/VideoSmall"
import Page from "@/common/Page.vue"
// import {SECURITY_CCTV,SECURITY_CCTV_MAX} from "/public/constants/url.js"
import { useStreams } from '@/store/modules/usestreams'
const { mode, setMode,SECURITY_CCTV,SECURITY_CCTV_MAX } = useStreams()
let testMax = "/videos/cctv/testMax.mp4"
let test1 = "/videos/cctv/test1.mp4"
let test2 = "/videos/cctv/test2.mp4"
let test3 = "/videos/cctv/test3.mp4"
let test4 = "/videos/cctv/test4.mp4"
let test5 = "/videos/cctv/test5.mp4"
let test6 = "/videos/cctv/test6.mp4"


import {ref,inject} from "vue"
const {AlertStore } = inject("store");
const videoMax=ref(SECURITY_CCTV_MAX)
const videoList=ref(SECURITY_CCTV)
const handlerSetCCTV=(status,url,item)=>{
  AlertStore.methods.setCCTVVamplify(status,url,{title:item.title,addressId:item.addressId})
}
</script>
<style scoped>
.breathing-border2 {
  /* box-shadow: 0 0 0.125rem 0 rgba(70, 245, 231, 0.5); */
  animation: breathe 1s ease-in-out 2 ;
}

@keyframes breathe {
  0% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(247, 42, 42, 0.6), 0 0 0.9375rem 0.625rem rgba(241, 19, 19, 0.4);
  }
  50% {
    box-shadow: 0 0 0.125rem 0 rgba(245, 70, 70, 0.5), 0 0 0.625rem 0 rgba(245, 70, 70, 0.3);
  }
  100% {
    box-shadow: 0 0 0.9375rem 0.625rem rgba(247, 42, 42, 0.6), 0 0 0.9375rem 0.625rem rgba(241, 19, 19, 0.4);
  }
}

</style>
<style>
/* 针对webkit内核浏览器的自定义样式 */
.scroll::-webkit-scrollbar {
  width: 0.0104rem;
  height: 0.2208rem;
}

.scroll::-webkit-scrollbar-track {
  background: #494949;
  /* 滚动条轨道的颜色 */
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #000;
  /* 滚动条的颜色 */
  border-radius: 0.026rem;
  /* 滚动条圆角 */
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: #000;
  /* 滚动条hover颜色 */
}

</style>