<template>
    <div class="py-[2rem] px-[1.625rem]">
        <div class="flex items-center">
            <div data-state="Default"
                class="px-[0.75rem] py-[0.25rem] inline-flex justify-start items-center gap-[0.75rem]">
                <div class="justify-center text-stone-300 text-[2rem] font-['light'] leading-[3rem]">Jeddah
                </div>
                <div class="w-[1.25rem] h-[1.25rem] relative">
                    <img src="@/assets/icon/arrow-right.svg" class="w-full h-full" alt="">
                </div>
            </div>
            <div data-state="Default"
                class="px-[0.75rem] py-[0.25rem] inline-flex justify-start items-center gap-[0.75rem]">
                <div class="justify-center text-blue-500 text-3xl font-['light'] leading-[3rem]">
                    Alinma Stadium</div>
            </div>
        </div>
        <!-- 搜索模块 -->
        <div class="w-full h-[4.875rem] mt-[2rem]">
            <div class="w-full h-[4.875rem] px-[1.5rem] rounded-[1rem] border-[0.0625rem] flex items-center gap-[1.5rem]"
                style="background: linear-gradient(350deg, rgba(3, 23, 43, 0.30) -8.4%, rgba(0, 32, 62, 0.30) 106.15%);border-color: rgba(64, 64, 64, 0.50);">
                <div class="w-[1.875rem] h-[1.875rem]">
                    <img class="w-full h-full" src="@/assets/icon/search.svg" alt="">
                </div>
                <input placeholder="Search Camera ID"
                    class="w-[35rem] text-white/90 ipt text-[1.75rem] font-['light'] leading-9 tracking-wide border-none bg-transparent outline-none"
                    style="box-shadow: none;" />

            </div>
        </div>
        <!-- 标题 -->
        <div class="flex items-center gap-[1.5rem] mt-[3.75rem] mb-[2.5rem]">
            <div class="justify-center text-white text-[2rem] font-['medium'] leading-[3rem]">Alinma Stadium</div>
            <div class="justify-center text-stone-300 text-[1.5rem] font-['light'] leading-[2.25rem]">(142 Cameras)
            </div>
        </div>
        <!-- cctv-list -->
        <div class="w-full flex items-center flex-col self-stretch">
            <div class="w-full flex flex-wrap relative gap-[1.8125rem]">
                <div class="w-full  flex justify-between flex-wrap gap-[1.8125rem]">
                    <div class="w-[20.5rem] bg-[#00111a]/25 rounded-[0.5rem] border border-white/10 flex-col justify-start items-start inline-flex relative"
                        v-for="(item, index) in videoList" :key="index">
                        <!-- <img class="w-[17.5625rem] h-[9.8125rem] rounded-md" src="@/assets/images/cctv1.png" /> -->
                        <div class="w-[20.5rem] h-[11.5rem] rounded-[0.5rem]">
                            <VideoSmall class="w-full h-full" :elmId="'video' + index" :videoUrl="item.src" />
                        </div>
                        <div class="p-[0.625rem] left-[17.1969rem] top-[8.1719rem] absolute bg-black/50 rounded-full justify-center items-center inline-flex cursor-pointer"
                            @click="handlerSetCCTV(true, item.src, item)">
                            <div class="w-[1.375rem] h-[1.375rem] relative">
                                <img class="w-full h-full block" src="@/assets/icon/maximise.svg" alt="">
                            </div>
                        </div>
                        <div class="p-[0.625rem] left-[17.1969rem] top-[0.875rem] absolute bg-black/50 rounded-full justify-center items-center inline-flex cursor-pointer"
                            >
                            <div class="w-[1.5rem] h-[1.5rem] relative">
                                <img class="w-full h-full block" src="@/assets/icon/pin.svg" alt="">
                            </div>
                        </div>
                        <div class="absolute left-[0.875rem] bottom-[0.4375rem]">
                            <div class="justify-start text-white text-[1.5rem] font-['semibold'] leading-loose [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.87)]">{{ item.title }} </div>
                            <div class="justify-start text-white text-[1.3125rem] font-['light'] leading-7 [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.87)]">{{ item.addressId }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagetion
                class="w-full mt-[4.375rem] justify-start items-center inline-flex overflow-hidden"
                :totalPages="10" />
        </div>
    </div>
</template>
<script setup>
import VideoSmall from "@/components/VideoSmall"
import Page from "@/common/Page.vue"
import Pagetion from "@/common/Pagetion.vue"
// import {ENVIRONMENTAL_VIDEO} from "/public/constants/url.js"
import { useStreams } from '@/store/modules/usestreams'
const { mode, setMode,ENVIRONMENTAL_VIDEO } = useStreams()
let test1 = "/videos/cctv/test1.mp4"
let test2 = "/videos/cctv/test2.mp4"
let test3 = "/videos/team/test3.mp4"
let test4 = "/videos/team/test4.mp4"
let test5 = "/videos/cctv/test5.mp4"
let test6 = "/videos/cctv/test6.mp4"
import { ref, inject } from "vue"
const { AlertStore } = inject("store");

const videoList = ref(ENVIRONMENTAL_VIDEO)
const handlerSetCCTV = (status, url, item) => {
    AlertStore.methods.setCCTVVamplify(status, url, { "title": item.title, "addressId": item.addressId })
}
</script>
<style lang="scss" scoped>
.ipt::placeholder {
    color: rgba(255, 255, 255, 0.90);
}
</style>