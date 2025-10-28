<template>
  <div>
    <div
      class="w-[16.75rem] h-[58rem] relative rounded-lg border-2 border-white/20  overflow-hidden scaleUp">
      <div class="px-[2.125rem] pt-[1.25rem] text-white text-[2rem] font-['semibold'] font-['Roboto'] tracking-wide">
        Team Bravo Members</div>
      <!-- <div class="w-1.5 h-[50.9375rem] left-[23rem] top-[7.6875rem] absolute bg-[#0d1e26]/30"></div>
      <div class="w-1.5 h-44 left-[23rem] top-[7.6875rem] absolute bg-[#05121d]"></div> -->
      <div class="w-[21.5rem] h-[0.125rem] mt-[1.25rem] mb-[1.375rem] ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16.6875rem" height="0.125rem" viewBox="0 0 344 2" fill="none">
          <path d="M0 1H210.839H217.053H344" stroke="url(#paint0_linear_8040_82344)" stroke-width="2" />
          <defs>
            <linearGradient id="paint0_linear_8040_82344" x1="0.578179" y1="1.49528" x2="345.808" y2="53.323"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.06" />
              <stop offset="0.46303" stop-color="white" stop-opacity="0.72" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="h-[51rem] flex items-center justify-start flex-col gap-[1.25rem] overflow-y-auto overflow-x-hidden scroll">
        <div
          class="w-[14rem] h-[14.5rem] pl-[0.875rem] py-[0.875rem] rounded-md border box-border border-white/10 flex-col justify-start items-start inline-flex relative" style="background: rgba(0, 17, 26, 0.27);"
          v-for="(item, index) in cctvList" :key="index">
          <div class="w-[11.875rem] h-[6.625rem] rounded-md">
            <VideoSmall class="w-full h-full" :elmId="'item'+index" :videoUrl="item.src"/>
          </div>
          <div
            class="p-[0.5625rem] left-[9.5625rem] top-[4.5rem] absolute bg-black/50 rounded-full justify-start items-start inline-flex cursor-pointer" @click="handlerSetCCTV(true,item.src,item)">
            <div class="w-6 h-6 relative">
              <img class="w-full h-full block" src="@/assets/icon/maximise.svg" alt="">
            </div>
          </div>
          <div
            class="text-white/90 text-[1.75rem] font-normal font-['Roboto'] leading-9 tracking-wide mt-[1.375rem] mb-2">
            {{ item.title }}</div>
          <div class="text-white/90 text-2xl font-normal font-['Roboto'] leading-[1.95rem] tracking-wide">
            {{ item.id }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import VideoSmall from "@/components/VideoSmall"
let test1 = "/videos/cctv/test1.mp4"
let test2 = "/videos/cctv/test2.mp4"
let test3 = "/videos/cctv/test3.mp4"

import {ref,inject} from "vue"
const {AlertStore } = inject("store");
const cctvList=ref([{
  title:"David",
  id:"#1621463",
  src:test1
},{
  title:"Ahlisha",
  id:"#1621464",
  src:test2
},{
  title:"Danny",
  id:"#1621465",
  src:test3
}])

const handlerSetCCTV=(status,url,item)=>{
  AlertStore.methods.setCCTVVamplify(status,url,{title:item.title,addressId:item.addressId})
}
</script>
<style>
.scaleUp {
  transform-origin:right; /* 设置动画的起始点为右上角 */
  animation: scaleUp 0.5s ease-in-out;
}

@keyframes scaleUp {
  0% {
    transform: scale(1) translateX(100%); /* 从右侧完全弹出 */
  }
  100% {
    transform: scale(1) translateX(0); /* 还原到原始位置 */
  }
}

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
  background-color: #2AECDA;
  /* 滚动条的颜色 */
  border-radius: 0.026rem;
  /* 滚动条圆角 */
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: #2AECDA;
  /* 滚动条hover颜色 */
}
</style>