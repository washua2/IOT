<template>
    <div class="w-[46.625rem] h-[117.9375rem] rounded-[1rem] br8 relative transition-[left] duration-300 ease-in-out "
        :class="isLeft ? 'left-[-51.5rem]' : 'left-0'" style="background:rgba(0, 17, 26, 0.42)">
        <div class="py-[2rem] px-[1.625rem]">
            <div class="flex items-center justify-between mb-[1.5rem]">
                <div class="flex items-center gap-[1.375rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3.625rem" height="3.25rem" viewBox="0 0 58 52"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H57V51H1L1 1Z" fill="#0D1E26" />
                        <path
                            d="M18.8196 30.3464V26.4168C18.8196 26.2813 18.7316 26.191 18.5997 26.1458L15.9163 25.6038C15.7404 25.5586 15.6084 25.649 15.6084 25.8296V39.4702C15.6084 39.6509 15.7844 39.7864 15.9603 39.7412L18.6437 38.7476C18.7316 38.7024 18.8196 38.6121 18.8196 38.4766V33.9598C18.8196 33.8243 18.9516 33.6888 19.0835 33.6888H23.8784C23.9664 33.6888 24.0543 33.6436 24.0983 33.5985L26.6937 29.8496C26.7817 29.7141 26.7377 29.5334 26.6057 29.4882L23.4385 27.6815C23.3065 27.5912 23.1306 27.6815 23.0866 27.817L22.2508 30.4819C22.2068 30.5722 22.1188 30.6626 21.9868 30.6626H19.1715C18.9516 30.6626 18.8196 30.5271 18.8196 30.3464ZM46.2689 25.9651L23.0866 9.79517C23.0426 9.75 22.9986 9.75 22.9546 9.75H20.4472C20.3592 9.75 20.2713 9.79517 20.2273 9.8855L16.6202 15.8928C16.5762 15.938 16.5762 15.9831 16.5762 16.0283V17.9253C16.5762 18.0157 16.6202 18.106 16.7081 18.1512L37.2071 31.4304C37.2511 31.4756 37.2951 31.4756 37.3391 31.4756H38.9227C38.9667 31.4756 39.0107 31.4756 39.0547 31.4304L46.2689 26.4168C46.4449 26.2813 46.4449 26.0555 46.2689 25.9651ZM18.2917 20.4095L16.7961 22.1711C16.7081 22.3066 16.7081 22.4872 16.8401 22.5776L37.0752 35.9923C37.1191 36.0375 37.1631 36.0375 37.2071 36.0375H38.9227C39.0107 36.0375 39.0547 35.9923 39.0987 35.9472L39.9784 34.9987C40.0224 34.9535 40.0224 34.9535 40.0224 34.9083L40.8142 32.3338C40.8582 32.1983 40.6823 32.0628 40.5503 32.1531C39.9345 32.6499 38.7028 33.5985 38.3069 33.9146C38.2189 33.9598 38.0869 33.9598 37.9989 33.9146C37.4271 33.5081 36.8112 33.1468 36.1954 32.8306H36.1514L18.6437 20.3644C18.5117 20.3192 18.3797 20.3192 18.2917 20.4095Z"
                            fill="white" />
                        <path d="M10.3098 1H1L1 51H10.3098" stroke="white" stroke-opacity="0.56" stroke-width="2" />
                        <path d="M47.6902 1H57L57 51H47.6902" stroke="white" stroke-opacity="0.56" stroke-width="2" />
                    </svg>
                    <div class="justify-start text-white text-[2rem] font-['semibold'] tracking-wide">CCTV</div>
                </div>
                <div class="flex items-center gap-[0.5rem] cursor-pointer" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 40 40"
                        fill="none">
                        <path
                            d="M20.4999 29.3333C20.9332 29.3333 21.511 29.2 21.7999 28.8C24.5444 25.6 30.8999 18.1333 30.8999 13.8667C30.8999 8.4 26.2777 4 20.4999 4C14.7221 4 10.0999 8.4 10.0999 13.8667C10.0999 18.1333 16.4554 25.6 19.1999 28.8C19.4888 29.2 20.0666 29.3333 20.4999 29.3333ZM17.8999 13.7333C17.8999 12.4 19.0554 11.3333 20.4999 11.3333C21.9444 11.3333 23.0999 12.4 23.0999 13.7333C23.0999 15.0667 21.9444 16.1333 20.4999 16.1333C19.0554 16.1333 17.8999 14.9333 17.8999 13.7333Z"
                            fill="#17E5C3" />
                        <path
                            d="M31.4777 28.6667L26.711 26.2667C26.1332 27.0667 25.5554 27.7333 24.9777 28.4L27.2888 29.6L20.4999 33.0667L13.5666 29.6L15.8777 28.4C15.2999 27.7333 14.7221 26.9333 14.1443 26.2667L9.37767 28.6667C9.08876 28.8 8.94434 29.0667 8.94434 29.4667V29.7333C8.94434 30.1333 9.08876 30.4 9.52209 30.5333L20.0666 35.8667C20.211 36 20.3554 36 20.4999 36C20.6443 36 20.7888 36 20.9332 35.8667L31.4777 30.5333C31.7666 30.4 32.0554 30 32.0554 29.7333V29.4667C32.0554 29.0667 31.911 28.8 31.4777 28.6667Z"
                            fill="#17E5C3" />
                    </svg>
                    <div class="text-right justify-start text-teal-400 text-[1.75rem] font-['medium'] tracking-wide">
                        Virtual Patrol</div>
                </div>
            </div>
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
                    <div class="justify-center text-[#17E5C3] text-3xl font-['light'] leading-[3rem]">
                        Alinma Stadium</div>
                </div>
            </div>
            <!-- 搜索模块 -->
            <div class="w-full h-[4.875rem] mt-[2rem] mb-[1.625rem]">
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
            <div
                class="w-[43.375rem] h-[23.75rem] relative left-0 top-0  rounded-[0.375rem] overflow-hidden  border-[0.0625rem] border-[#d03801] flex-col justify-start items-start inline-flex">
                <div class="w-[43.125rem] h-[23.75rem]">
                    <VideoSmall class="w-full h-full" :elmId="'video13423'" :videoUrl="videoMax.src" />
                </div>
                <div class="p-[0.5625rem] right-[1.1875rem] bottom-[0.9375rem] absolute bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                    @click="handlerSetCCTV(true, videoMax.src, videoMax)">
                    <div class="w-[1.5rem] h-[1.5rem] relative ">
                        <img class="w-full h-full block" src="@/assets/icon/maximise.svg" alt="">
                    </div>
                </div>
                <div
                    class="text-white/90 text-[1.75rem] font-['semibold'] leading-9 tracking-wide mt-8 mb-3 absolute bottom-[2.6875rem] left-[1.1875rem]">
                    {{ videoMax.title }}
                </div>
                <div
                    class="text-white/90 text-2xl font-['light] leading-[1.95rem] tracking-wide absolute bottom-[1rem] left-[1.1875rem]">
                    {{ videoMax.addressId }}
                </div>
            </div>
            <!-- cctv-list -->
            <div class="w-full flex items-center flex-col self-stretch mt-[1rem]">
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
                            <div
                                class="p-[0.625rem] left-[17.1969rem] top-[0.875rem] absolute bg-black/50 rounded-full justify-center items-center inline-flex cursor-pointer">
                                <div class="w-[1.5rem] h-[1.5rem] relative">
                                    <img class="w-full h-full block" src="@/assets/icon/pin.svg" alt="">
                                </div>
                            </div>
                            <div class="absolute left-[0.875rem] bottom-[0.4375rem]">
                                <div
                                    class="justify-start text-white text-[1.5rem] font-['semibold'] leading-loose [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.87)]">
                                    {{ item.title }} </div>
                                <div
                                    class="justify-start text-white text-[1.3125rem] font-['light'] leading-7 [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.87)]">
                                    {{ item.addressId }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagetion class="w-full mt-[1.875rem] justify-start items-center inline-flex overflow-hidden"
                    :totalPages="10" />
            </div>
        </div>
    </div>
</template>
<script setup>
import VideoSmall from "@/components/VideoSmall"
import Page from "@/common/Page.vue"
import Pagetion from "@/common/Pagetion.vue"
// import {ENVIRONMENTAL_VIDEO} from "/public/constants/url.js"
import { useStreams } from '@/store/modules/usestreams'
import { ref, inject, onMounted ,defineEmits} from "vue"
const emit = defineEmits(['handlerVirtual'])
const { mode, setMode,ENVIRONMENTAL_VIDEO,ENVIRONMENTAL_VIDEO_MAX } = useStreams()
let test1 = "/videos/cctv/test1.mp4"
let test2 = "/videos/cctv/test2.mp4"
let test3 = "/videos/team/test3.mp4"
let test4 = "/videos/team/test4.mp4"
let test5 = "/videos/cctv/test5.mp4"
let test6 = "/videos/cctv/test6.mp4"
const { AlertStore ,MenuStore} = inject("store");
const isLeft = ref(true)
const videoMax = ref(ENVIRONMENTAL_VIDEO_MAX)
const videoList = ref(ENVIRONMENTAL_VIDEO)
const isVirtual=ref(false)
const handlerVirtual=()=>{
    isVirtual.value=true
    emit('handlerVirtual',isVirtual.value)   
}
const handlerSetCCTV = (status, url, item) => {
    AlertStore.methods.setCCTVVamplify(status, url, { "title": item.title, "addressId": item.addressId })
}
ue.interface.SwitchRoute = (data) => {
    console.log("SwitchRoute", data)
    if(data.show){
        handlerVirtual()
    }
}
onMounted(() => {
    setTimeout(() => {
        isLeft.value = false
    }, 100)
})
</script>
<style lang="scss" scoped>
.ipt::placeholder {
    color: rgba(255, 255, 255, 0.90);
}
</style>