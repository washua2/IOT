<template>
  <div>
    <!-- cctv-list -->
    <div class="flex items-center flex-col self-stretch">
      <div class="w-full flex flex-wrap relative gap-[1.8125rem]">
        <div class="w-[40.9375rem] h-[18.25rem] left-[1.875rem] top-[15.625rem] absolute flex flex-wrap gap-[1.8125rem]">
          <div
            class="w-[19.5625rem] h-[18.25rem] p-[1.125rem] px-[0.875rem]  bg-[#00111a]/25 rounded-md border border-white/10 flex-col justify-start items-start inline-flex relative"
            v-for="(item, index) in videoList" :key="index">
            <!-- <img class="w-[17.5625rem] h-[9.8125rem] rounded-md" src="@/assets/images/cctv1.png" /> -->
            <div class="w-[17.5625rem] h-[9.8125rem] rounded-md">
                <VideoSmall class="w-full h-full" :elmId="'video'+index" :videoUrl="item.src"/>
            </div>
            <div class="p-[0.5625rem] left-[15.5719rem] top-[8.1719rem] absolute bg-black/50 rounded-full justify-start items-start inline-flex cursor-pointer" @click="handlerSetCCTV(true,item.src,item)">
              <div class="w-6 h-6 relative">
              <img class="w-full h-full block" src="@/assets/icon/maximise.svg" alt="">
              </div>
            </div>
            <div class="text-white/90 text-[1.75rem] font-['medium'] leading-9 tracking-wide mt-[1.375rem] mb-[0.5rem]">{{ item.title }}</div>
            <div class="text-white/90 text-2xl font-['light'] leading-[1.95rem] tracking-wide">{{ item.addressId }}
            </div>
          </div>
        </div>
      </div>
      <Page class="w-[40.4375rem] left-[0] top-[75.9375rem] absolute justify-start items-center inline-flex overflow-hidden" :totalPages="10" />
    </div>
  </div>
</template>
<script setup>
import VideoSmall from "@/components/VideoSmall"
import Page from "@/common/Page.vue"
// import {TEAM_CCTV} from "/public/constants/url.js"
import { useStreams } from '@/store/modules/usestreams'
const { mode, setMode,TEAM_CCTV}  = useStreams()
let test1 = "/videos/cctv/test1.mp4"
let test2 = "/videos/cctv/test2.mp4"
let test3 = "/videos/team/test3.mp4"
let test4 = "/videos/team/test4.mp4"
let test5 = "/videos/cctv/test5.mp4"
let test6 = "/videos/cctv/test6.mp4"
import {ref,inject} from "vue"
const {AlertStore } = inject("store");

const videoList=ref(TEAM_CCTV)
const handlerSetCCTV=(status,url,item)=>{
  AlertStore.methods.setCCTVVamplify(status,url,{"title":item.title,"addressId":item.addressId})
}
</script>