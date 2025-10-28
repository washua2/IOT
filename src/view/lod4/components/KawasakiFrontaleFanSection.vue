<template>
    <div class="w-[45.125rem] h-[117.1875rem] relative transition-[right] duration-300 ease-in-out "
        :class="isRight ? 'right-[-51.5rem]' : 'right-0'">
        <img src="@/assets/images/lod4/2.png" alt="" class="w-full h-full">
        <!-- video -->
        <div class="absolute top-[7.8125rem] left-[0.625rem]">
            <div
                class="w-[43.375rem] h-[24.8125rem] relative left-0 top-0  rounded-[0.375rem] overflow-hidden flex-col justify-start items-start inline-flex">
                <div class="w-[43.375rem] h-[24.8125rem]">
                    <VideoSmall class="w-full h-full" :elmId="'video138723213'" :videoUrl="videoMax.src" />
                </div>
                <div class="p-[0.5625rem] right-[1.1875rem] top-[1rem] absolute bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                    >
                    <div class="w-[1.5rem] h-[1.5rem] relative flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.375rem" height="1.375rem" viewBox="0 0 22 22"
                            fill="none">
                            <path
                                d="M19.3818 7.83398L19.0244 8.33496L13.3037 16.3457L13.0732 16.668L13.1836 17.0488C13.3723 17.6973 13.3833 18.385 13.2148 19.0391C13.0462 19.6933 12.7044 20.291 12.2256 20.7676H12.2246C12.0882 20.9036 11.9036 20.9804 11.7109 20.9805C11.5183 20.9805 11.3327 20.9037 11.1963 20.7676L6.57031 16.1396L5.99121 15.5615L1.03027 10.6006C0.962985 10.5333 0.909517 10.4531 0.873047 10.3652C0.836573 10.2772 0.817383 10.1822 0.817383 10.0869C0.817416 9.99169 0.836606 9.89755 0.873047 9.80957C0.90952 9.72152 0.962882 9.64161 1.03027 9.57422L1.03125 9.57324C1.50795 9.09456 2.10464 8.75263 2.75879 8.58398C3.41288 8.41539 4.1004 8.42575 4.74902 8.61426L5.12988 8.72461L5.45312 8.49414L13.4629 2.77246L13.9629 2.41406L19.3818 7.83398Z"
                                stroke="white" stroke-width="1.63482" />
                        </svg>
                    </div>
                </div>
                <div class="p-[0.5625rem] right-[1.1875rem] bottom-[0.9375rem] absolute bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                    @click="handlerSetCCTV(true, videoMax.src, videoMax)">
                    <div class="w-[1.5rem] h-[1.5rem] relative ">
                        <img class="w-full h-full block" src="@/assets/icon/maximise.svg" alt="">
                    </div>
                </div>
                <div
                    class="text-white/90 text-[1.375rem] font-['semibold'] leading-9 tracking-wide mt-8  absolute bottom-[2.6875rem] left-[1.1875rem]">
                    {{ videoMax.title }}
                </div>
                <div
                    class="text-white/90 text-[1.1875rem] font-['light'] leading-[1.95rem] tracking-wide absolute bottom-[1rem] left-[1.1875rem]">
                    {{ videoMax.addressId }}
                </div>
            </div>
        </div>
        <!-- echart1 -->
        <div class="absolute top-[69.1875rem] left-0">
            <div id="realtimeEmotionTrend1" class="w-[45.125rem] h-[24.625rem]"></div>
        </div>
        <!-- echart2 -->
        <div class="absolute bottom-[-1.25rem] left-0">
            <div id="proportion3" class="w-[45.125rem] h-[24.625rem]"></div>
        </div>

    </div>
</template>
<script setup>
import VideoSmall from "@/components/VideoSmall"
import { renderEmotionChart } from '@/utils/echarts/realtimeEmotionTrend'
import { renderChart } from '@/utils/echarts/proportion2'

import { useStreams } from '@/store/modules/usestreams'
import { ref, inject, onMounted, defineEmits } from "vue"
const { mode, setMode, ENVIRONMENTAL_VIDEO,KAWASAKIFRONTALEFANSECTION } = useStreams()
const { AlertStore } = inject("store");
const isRight = ref(true)
const videoMax = ref(KAWASAKIFRONTALEFANSECTION)
const videoList = ref(ENVIRONMENTAL_VIDEO)
const isVirtual = ref(false)
const handlerVirtual = () => {
    isVirtual.value = !isVirtual.value
    emit('handlerVirtual', isVirtual.value)
}
const handlerSetCCTV = (status, url, item) => {
    AlertStore.methods.setCCTVVamplify(status, url, { "title": item.title, "addressId": item.addressId })
}
onMounted(() => {
    setTimeout(() => {
        isRight.value = false
    }, 100)
    renderEmotionChart('realtimeEmotionTrend1')
    renderChart('proportion3')
})
</script>