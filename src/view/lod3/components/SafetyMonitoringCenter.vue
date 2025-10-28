<template>
    <div>
        <div class="w-[46.625rem] h-[117.9375rem] relative transition-[left] duration-300 ease-in-out " :class="isLeft ? 'left-[-51.5rem]' : 'left-0'" >
            <!-- 标头 -->
            <!-- <div class="h-[6.6875rem] px-[2rem] flex items-center justify-between">
                <div class="flex items-center gap-[1.375rem]">
                <div>
                    <img src="@/assets/lod3Icon/icon.svg" alt="" class="w-[2.875rem] h-[2.625rem]">
                </div>
                    <div class="justify-start text-white text-[2.25rem] font-['semibold'] tracking-wide">
                        Total Visitors </div>
                </div>
            </div>
            <div class="w-[46.625rem] h-0 outline outline-[0.125rem] outline-offset-[-0.0625rem] outline-white/10">
            </div> -->
            <!-- 图表模块 -->
            <div class="w-[46.625rem] h-[117.9375rem] relative">
                <img src="@/assets/images/safetyMonitoringCenter/3.png" alt="" class="w-full h-full">
                <div class="px-[1.875rem] mt-[4.3125rem] absolute top-[39.375rem] left-0">
                    <div class="flex items-center gap-[1rem] mb-[1.875rem]">
                        <div class="flex items-center justify-center">
                            <img src="@/assets/icon/group.svg" class="w-[2rem] h-[1.75rem]" alt="">
                        </div>
                        <div class="justify-start text-white text-[1.875rem] font-['medium']">Real-Time Visitor Flow
                        </div>
                    </div>
                    <div id="visitorFlow" class="w-[41.3125rem] h-[25rem]"></div>
                </div>
                <!--  -->
                <div class="px-[1.875rem] mt-[4.3125rem] absolute top-[83.4375rem] left-0">
                    <div class="flex items-center gap-[1rem] mb-[1.875rem]">
                        <div class="flex items-center justify-center">
                            <img src="@/assets/icon/group.svg" class="w-[2rem] h-[1.75rem]" alt="">
                        </div>
                        <div class="justify-start text-white text-[1.875rem] font-['medium']">Zone 0ccupancy Status
                        </div>
                    </div>
                    <div id="zone0ccupancy" class="w-[41.3125rem] h-[25rem]"></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { renderChart } from "@/utils/echarts/visitorFlow.js"
import { renderZone0ccupancyChart } from "@/utils/echarts/zone0ccupancy.js"
import * as echarts from "echarts"; // 导入 echarts 库
import { ref, onMounted, watch, nextTick } from 'vue'
const isLeft = ref(true)
onMounted(() => {
    renderChart('visitorFlow')
    renderZone0ccupancyChart('zone0ccupancy')
    setTimeout(() =>{
        isLeft.value = false
    },100)
})
</script>